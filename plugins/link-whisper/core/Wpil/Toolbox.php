<?php

/**
 * A holder for utility methods that are useful to multiple classes.
 * Not intended as a catch-all for any method that doesn't seem to have a place to live
 */
class Wpil_Toolbox
{

    private static $pillar_ids = null;

    /**
     * Escapes strings for "LIKE" queries
     **/
    public static function esc_like($string = ''){
        global $wpdb;
        return '%' . $wpdb->esc_like($string) . '%';
    }

    /**
     * Gets if custom rules have been added to the .htaccess file
     **/
    public static function is_using_custom_htaccess(){
        // Check if a .htaccess file exists.
		if(defined('ABSPATH') && is_file(ABSPATH . '.htaccess')){
			// If the file exists, grab the content of it.
			$htaccess_content = file_get_contents(ABSPATH . '.htaccess');

			// Filter away the core WordPress rules.
			$filtered_htaccess_content = trim(preg_replace('/\# BEGIN WordPress[\s\S]+?# END WordPress/si', '', $htaccess_content));

            // return if there's anything still in the file
            return !empty($filtered_htaccess_content);
		}

        return false;
    }

    /**
     * Gets the current action hook priority that is being executed.
     * 
     * @return int|bool Returns the priority of the currently executed hook if possible, and false if it is not.
     **/
    public static function get_current_action_priority(){
        global $wp_filter;

        $filter_name = current_filter();
        if(isset($wp_filter[$filter_name])){
            $filter_instance = $wp_filter[$filter_name];
            if(method_exists($filter_instance, 'current_priority')){
                return $filter_instance->current_priority();
            }
        }

        return false;
    }

    /**
     * Checks if the link is relative.
     * Ported from URLChanger at version 2.1.6
     * 
     * @param string $link
     **/
    public static function isRelativeLink($link = ''){
        if(empty($link) || empty(trim($link))){
            return false;
        }

        if(strpos($link, 'http') === false && substr($link, 0, 1) === '/'){
            return true;
        }

        // parse the URL to see if it only contains a path
        $parsed = wp_parse_url($link);
        if( !isset($parsed['host']) && 
            !isset($parsed['scheme']) && 
            isset($parsed['path']) && !empty($parsed['path'])
        ){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Checks to see if the current post is a pillar content post.
     * Currently only checks for Rank Math setting
     * 
     * @param int $post_id The id of the post that we're checking
     * @return bool Is this pillar content?
     **/
    public static function check_pillar_content_status($post_id = 0){
        global $wpdb;
        
        if(empty($post_id) || !defined('RANK_MATH_VERSION')){
            return false;
        }

        if(is_null(self::$pillar_ids)){
            $ids = $wpdb->get_col("SELECT DISTINCT `post_id` FROM {$wpdb->postmeta} WHERE `meta_key` = 'rank_math_pillar_content' AND `meta_value` = 'on'");
            self::$pillar_ids = (!empty($ids)) ? $ids: array();
        }

        return in_array($post_id, self::$pillar_ids);
    }

    /**
     * Compresses and base64's the given data so it can be saved in the db.
     * 
     * @param string $data The data to be compressed
     * @return null|string Returns a string of compressed and base64 encoded data 
     **/
    public static function compress($data = false){
        // first serialize the data
        $data = serialize($data);

        // if zlib is available
        if(extension_loaded('zlib')){
            // use it to compress the data
            $data = gzcompress($data);
        }elseif(extension_loaded('Bz2')){// if zlib isn't available, but bzip2 is
            // use that to compress the data
            $data = bzcompress($data);
        }

        // now base64 and return the (hopefully) compressed data
        return base64_encode($data);
    }

    /**
     * Decompresses stored data that was compressed with compress.
     * 
     * @param string $data The data to be decompressed
     * @return mixed $data 
     **/
    public static function decompress($data){
        if(empty($data) || !is_string($data) || !Wpil_Link::checkIfBase64ed($data, true)){
            return $data;
        }

        // first un-64 the data
        $data = base64_decode($data);
        // then determine what our flavor of encoding is and decode the data
        // if zlib is available
        if(extension_loaded('zlib')){
            // if the data is zipped
            if(self::is_gz_compressed($data)){
                // use it to decompress the data
                $data = gzuncompress($data);
            }
        }elseif(extension_loaded('Bz2')){// if zlib isn't available, but bzip2 is
            // use that to decompress the data
            $data = bzdecompress($data);
        }

        // and return our unserialized and hopefully de-compressed data
        return maybe_unserialize($data);
    }

    /**
     * Gets post meta that _should_ be encoded and compressed and decompresses and decodes it before returning it
     **/
    public static function get_encoded_post_meta($id, $key, $single = false){
        $data = get_post_meta($id, $key, $single);

        if(!empty($data) && is_string($data)){
            // do a double check just to make sure that plain serialized data hasn't been handed to us
            if(is_serialized($data)){
                $data = maybe_unserialize($data);
            }else{
                $dat = self::decompress($data);
                if($dat !== false && $dat !== $data){
                    $data = $dat;
                }
            }
        }

        return $data;
    }

    /**
     * Compresses and encodes object and array based meta data and then saves it
     **/
    public static function update_encoded_post_meta($id, $key, $data, $prev_value = ''){
        if(!empty($data) && (is_array($data) || is_object($data))){
            $dat = self::compress($data);
            if(!empty($dat) && $dat !== $data){
                $data = $dat;
            }
        }

        update_post_meta($id, $key, $data, $prev_value);
    }

    /**
     * Gets term meta that _should_ be encoded and compressed and decompresses and decodes it before returning it
     **/
    public static function get_encoded_term_meta($id, $key, $single = false){
        $data = get_term_meta($id, $key, $single);

        if(!empty($data) && is_string($data)){
            // do a double check just to make sure that plain serialized data hasn't been handed to us
            if(is_serialized($data)){
                $data = maybe_unserialize($data);
            }else{
                $dat = self::decompress($data);
                if($dat !== false && $dat !== $data){
                    $data = $dat;
                }
            }
        }

        return $data;
    }

    /**
     * Compresses and encodes object and array based term meta data and then saves it
     **/
    public static function update_encoded_term_meta($id, $key, $data, $prev_value = ''){
        if(!empty($data) && (is_array($data) || is_object($data))){
            $dat = self::compress($data);
            if(!empty($dat) && $dat !== $data){
                $data = $dat;
            }
        }

        update_term_meta($id, $key, $data, $prev_value);
    }

    /**
     * Helper function. Checks to see if a supplied string is gzcompressed
     * @return bool
     **/
    public static function is_gz_compressed($encoded = ''){
        // first confirm that we're dealing with a possibly encoded string
        if(empty(trim($encoded)) || !is_string($encoded) || strlen($encoded) < 2){
            return false;
        }

        $header = substr($encoded, 0, 2);

        // check to make sure that the header is valid
        $byte1 = ord(substr($encoded, 0, 1));
        $byte2 = ord(substr($encoded, 1, 1));

        if(($byte1 * 256 + $byte2) % 31 !== 0){
            return false;
        }

        // check it against the most common zlib headers
        $zlib_headers = array("\x78\x01", "\x78\x9C", "\x78\xDA", "\x78\x20", "\x78\x5E");
        foreach($zlib_headers as $zheader){
            if($header === $zheader){
                return true;
            }
        }

        // if the first pass didn't work, try checking against less common but still possible headers
        $zlib_headers = array(
            "\x08\x1D",   "\x08\x5B",   "\x08\x99",   "\x08\xD7",
            "\x18\x19",   "\x18\x57",   "\x18\x95",   "\x18\xD3",
            "\x28\x15",   "\x28\x53",   "\x28\x91",   "\x28\xCF",
            "\x38\x11",   "\x38\x4F",   "\x38\x8D",   "\x38\xCB",
            "\x48\x0D",   "\x48\x4B",   "\x48\x89",   "\x48\xC7",
            "\x58\x09",   "\x58\x47",   "\x58\x85",   "\x58\xC3",
            "\x68\x05",   "\x68\x43",   "\x68\x81",   "\x68\xDE"
        );

        foreach($zlib_headers as $zheader){
            if($header === $zheader){
                return true;
            }
        }

        return false;
    }

    public static function output_dropdown_wrapper_atts($data = array()){
        if(empty($data) || !isset($data['report_type'])){
            return;
        }
        $output = '';
        switch($data['report_type']){
            case 'autolinks':
                if(isset($data['keyword_id'])){
                    $output .= ' data-keyword-id="' . (int)$data['keyword_id'] . '"';
                }
                if(isset($data['keyword'])){
                    $output .= ' data-keyword="' . esc_attr($data['keyword']) . '"';
                }
                if(isset($data['dropdown_type'])){
                    $output .= ' data-dropdown-type="' . esc_attr($data['dropdown_type']) . '"';
                }
                break;
            default:
                break;
        }

        if(isset($data['nonce']) && !empty($data['nonce'])){
            $output .= ' data-wpil-collapsible-nonce="' . esc_attr($data['nonce']) . '"';
        }

        return $output;
    }
}
