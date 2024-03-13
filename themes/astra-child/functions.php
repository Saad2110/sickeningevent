<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', "1.0.6",array( 'astra-theme-css' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );



// Enqueue custom JS
function enqueue_custom_js() {
// 	wp_enqueue_script('custom-script-jq', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js');
// 	wp_enqueue_script('custom-script-jq', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.js');
    // Register the custom script
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/devhubapp.js', array('jquery'), "1.1.39", true);
    // wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/devhubapp.js');
}
add_action('wp_enqueue_scripts', 'enqueue_custom_js');



// // END ENQUEUE PARENT ACTION

// price calculator shortcode

function price_calculator_shortcode() {
    ob_start();
    ?>
    <div class="developerhub">
        <h2>Calculate Your Sales & Savings</h2>
        <p>Enter some averages to estimate what you would sell and save in fees if you switched.</p>
        <div class="selectioncompany">
            <label for="brands"></label>
            <select id="brands" style="color: #fff;background: black;">
                <option value="eventbrite" selected="selected" data-img_src="/wp-content/uploads/2023/07/eventbrite-1.png"> Eventbrite</option>
                <option value="seeticket" data-img_src="/wp-content/uploads/2023/07/seetickets.png"> SeeTickets.us</option>
                <option value="posh" data-img_src="/wp-content/uploads/2023/07/posh.png"> POSH.vip </option>
                <option value="ticketmaster" data-img_src="/wp-content/uploads/2023/07/ticketmaster.png"> Ticketmaster</option>
                <option value="etix" data-img_src="/wp-content/uploads/2023/07/etix.png"> Etix</option>
                <option value="ticketweb" data-img_src="/wp-content/uploads/2023/07/ticketweb.png"> TicketWeb </option>
                <option value="showclix" data-img_src="/wp-content/uploads/2023/07/showclicks.png"> ShowClix</option>
                <option value="tixr" data-img_src="/wp-content/uploads/2023/07/tixr.png"> TIXR</option>
            </select>
            <div id="dhflag-div"><img src="/wp-content/uploads/2023/07/eventbrite-1.png" width="150"></div>
        </div>
        <div class="formscalc">
            <div class="avgticketprice">
				<div class="label-row">
					<div class="label-row-l">
						<label for="vol">Avg Ticket Price</label>	
					</div>
					<div class="label-row-r">
						<span>$<span inputid="ticketprice">50</span></span>
					</div>
				</div>
                <input type="range" id="ticketprice" name="vol" min="5" max="195" step="5" value="50" />
                <div class="label-row-hide">
					<span>$<span inputid="ticketprice">50</span></span>
				</div>
            </div>
            <div class="avgticketprice">
				<div class="label-row">
					<div class="label-row-l">
						<label for="vol">Avg. Attendees Per Event</label>
					</div>
					<div class="label-row-r">
						<span inputid="attendees">100</span>
					</div>
				</div>
                <input type="range" name="vol" min="10" max="10000" step="10" id="attendees" value="100" />
				<div class="label-row-hide">
                	<span inputid="attendees">100</span>
				</div>

            </div>
            <div class="avgticketprice">
				<div class="label-row">
					<div class="label-row-l">
						<label for="vol">Events Per Year</label>
					</div>
					<div class="label-row-r">
						<span inputid="events" class="events-p-y-span">30</span>
					</div>
				</div>
                <input type="range" name="vol" min="1" max="365" id="events" value="30" />
				<div class="label-row-hide">
                	<span inputid="events" class="events-p-y-span">30</span>
				</div>
                
            </div>
        </div>
        <div class="pricedisplay">
            <div class="estimatedsales">
                <p>Estimated Sales</p>
                <h4 id="estimatedsales">$132,000.00</h4>
            </div>
            <div class="switchfromeventbrite">
                 <p>Savings</p>    
                <h4 id="switchfromeventbrite">$132,000.00</h4>
            </div>
        </div>
    </div>
<script>
jQuery('#brands').change(function(){
        var img_url = jQuery(this).children('option:selected').data('img_src');
        jQuery('#dhflag-div').html('<img src="'+img_url+'" width="150">');
        console.log('img_url');
                console.log(img_url);
    }); 
</script>
    <?php
    return ob_get_clean();
}
add_shortcode('pricecalculator', 'price_calculator_shortcode');


function price_calculator_shortcode_slider() {
    ob_start();
    
    ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="developerhubsslider">
    <h1>Don't get low fee FOMO! Calculate your savings</h1>
    <h2>Keep more money in your pocket when you switch. We've already saved organizers $2M and counting!</h2>
    <div class="neon-btn">
        <span id="get_started_calculator">Don't see your platform?</span>
    </div>
    <div class="dh_slick-calculator" style="color: #fff;">
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/eventbrite-1.png" width="150">
                <input type="hidden" name="brandseb" id="brandseb" value="eventbrite">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpriceeb" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpriceeb" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpriceeb" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeeseb" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeeseb" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeeseb" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventseb" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventseb" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventseb" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsaleseB">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbriteeB">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/seetickets.png" width="150">
                <input type="hidden" name="brandsst" id="brandsst" value="seeticket">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpricest" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpricest" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpricest" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeesst" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeesst" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeesst" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventsst" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventsst" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventsst" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalesst">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbritest">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/posh.png" width="150">
                <input type="hidden" name="brandspsh" id="brandspsh" value="posh">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpricepsh" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpricepsh" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpricepsh" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeespsh" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeespsh" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeespsh" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventspsh" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventspsh" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventspsh" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalespsh">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbritepsh">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/ticketmaster.png" width="150">
                <input type="hidden" name="brandstt" id="brandstt" value="ticketmaster">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpricett" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpricett" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpricett" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeestt" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeestt" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeestt" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventstt" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventstt" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventstt" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalestt">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbritett">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/etix.png" width="150">
                <input type="hidden" name="brandsetix" id="brandsetix" value="etix">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpriceetix" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpriceetix" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpriceetix" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeesetix" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeesetix" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeesetix" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventsetix" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventsetix" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventsetix" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalesetix">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbriteetix">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/ticketweb.png" width="150">
                <input type="hidden" name="brandstw" id="brandstw" value="ticketweb">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpricetw" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpricetw" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpricetw" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeestw" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeestw" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeestw" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventstw" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventstw" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventstw" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalestw">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbritetw">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/showclicks.png" width="150">
                <input type="hidden" name="brandssc" id="brandssc" value="showclix">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpricesc" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpricesc" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpricesc" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeessc" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeessc" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeessc" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventssc" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventssc" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventssc" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalessc">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbritesc">$132,000.00</h4>
                </div>
            </div>
        </div>
        <div class="dh-single-slide-cont" style="color: #fff;width:500px;">
            <div id="dhflag-div">
                <img decoding="async" src="/wp-content/uploads/2023/07/tixr.png" width="150">
                <input type="hidden" name="brandstxr" id="brandstxr" value="tixr">
            </div>
            <div class="formscalc">
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg Ticket Price</label>   
                        </div>
                        <div class="label-row-r">
                            <span>$<span inputid="ticketpricetxr" class="avg-t-p-span">50</span></span>
                        </div>
                    </div>
                    <input type="range" id="ticketpricetxr" name="vol" min="5" max="195" step="5" value="50" class="avg-t-p-input" />
                    <div class="label-row-hide">
                        <span>$<span inputid="ticketpricetxr" class="avg-t-p-span">50</span></span>
                    </div>
                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Avg. Attendees Per Event</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="attendeestxr" class="avg-a-p-e-span">100</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="10" max="10000" step="10" id="attendeestxr" value="100" class="avg-a-p-e-input" />
                    <div class="label-row-hide">
                        <span inputid="attendeestxr" class="avg-a-p-e-span">100</span>
                    </div>

                </div>
                <div class="avgticketprice">
                    <div class="label-row">
                        <div class="label-row-l">
                            <label for="vol">Events Per Year</label>
                        </div>
                        <div class="label-row-r">
                            <span inputid="eventstxr" class="events-p-y-span">30</span>
                        </div>
                    </div>
                    <input type="range" name="vol" min="1" max="365" id="eventstxr" value="30" class="events-p-y-input" />
                    <div class="label-row-hide">
                        <span inputid="eventstxr" class="events-p-y-span">30</span>
                    </div>
                    
                </div>
            </div>
            <div class="pricedisplay">
                <div class="estimatedsales">
                    <p>Estimated Sales</p>
                    <h4 id="estimatedsalestxr">$132,000.00</h4>
                </div>
                <div class="switchfromeventbrite">
                     <p>Savings</p>    
                    <h4 id="switchfromeventbritetxr">$132,000.00</h4>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
        jQuery(document).ready(function(){
            jQuery('.dh_slick-calculator').slick({
                // dots: true,
                // infinite: true,
                // speed: 500,
                // fade: true,
                // cssEase: 'linear'
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                autoplay: false,
                draggable: false,
                swipeToSlide: false,
                touchMove: false,
                swipe: false,
                accessibility: false
            });
        });
        jQuery('#get_started_calculator').on('click', function () {
            PUM.open(2017);
        });
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('pricecalculatorslider', 'price_calculator_shortcode_slider');

add_action('wp_footer','dh_cstm_popup_trigger');
function dh_cstm_popup_trigger() {
    ?>
        <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script>
        <script>
            jQuery('.cstm-get-started-form-popup').on('click', function () {
                PUM.open(2017);
            });
        </script>
    <?php

    if (get_the_ID() == 7 || get_the_ID() == 740 || get_the_ID() == 948 || get_the_ID() == 927 || get_the_ID() == 1650 || get_the_ID() == 566 || get_the_ID() == 713 || get_the_ID() == 1625 ) {
        ?>
        <script>
            jQuery(document).on('mouseleave', function(e) {
                // var popup_open = jQuery.cookie("pum-2107");
                var popup_open = Cookies.get("pum-2107")
                console.log('popup_open_val');
                console.log(popup_open);
                if (popup_open != 'true') {
                    if (e.clientY < 0) {
                        PUM.open(2107);
                    }
                }
            });
        </script>
    <?php
    }
}

add_action( 'wp_footer', function () { ?>
    <script>
 
        jQuery(document).ready(function($) {
 
            var $menu = $('.elementor-nav-menu:first');
 
            // Get rid of the existing menu
            $menu.smartmenus('destroy');
 
            // Re-instantiate the new menu, with no delay settings
            $menu.smartmenus( {
                subIndicatorsText: '',
                subIndicatorsPos: 'append',
                subMenusMaxWidth: '1000px',
                hideDuration: 150, // the length of the fade-out animation
                hideTimeout: 100, // timeout before hiding the sub menus
                showTimeout: 0,   // timeout before showing the sub menus
            });
        });
    </script>
<?php } );

