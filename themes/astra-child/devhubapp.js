jQuery(document).ready(function($) {
    // Cache the range input elements using its ID or any other selector
    var rangeInputsslider = $(".developerhubsslider").find('input[type="range"]');
    var rangeInputs = $(".developerhub").find('input[type="range"]');
    var ticketData = {
        ticketpriceeb: 0,
        attendeeseb: 0,
        eventseb: 0,
        ticketpricest: 0,
        attendeesst: 0,
        eventsst: 0,
        ticketpricepsh: 0,
        attendeespsh: 0,
        eventspsh: 0,
        ticketpricett: 0,
        attendeestt: 0,
        eventstt: 0,
        ticketpriceetix: 0,
        attendeesetix: 0,
        eventsetix: 0,
        ticketpricetw: 0,
        attendeestw: 0,
        eventstw: 0,
        ticketpricesc: 0,
        attendeessc: 0,
        eventssc: 0,
        ticketpricetxr: 0,
        attendeestxr: 0,
        eventstxr: 0,
    };
    let brands = {
        eventbrite: {
            parecentfee: 3.70,
            dollarfee: 1.79
        },
        seeticket: {
            parecentfee: 5,
            dollarfee: 0.99
        },
        posh: {
            parecentfee: 10,
            dollarfee: 0.99
        },
        ticketmaster: {
            parecentfee: 30,
            dollarfee: 0
        },
        etix: {
            parecentfee: 10,
            dollarfee: 0
        },
        ticketweb:{
            parecentfee: 6,
            dollarfee: 0
        },
        showclix:{
            parecentfee: 7.50,
            dollarfee: 0
        },
        tixr:{
            parecentfee: 4.20,
            dollarfee: 0.99
        },
    };
    let sickeningfee = 0;
    let otherplatformfee = 0;
    let estimatedforsick=0;
    let estimatedforeventbrite=0;
    // Function to update elements on the page based on the value
    function updatePageElements(idofthat, value) {
        $(`span[inputid=${idofthat}]`).text(value);
    }

    // Function to handle calculations and update sickening fee
    function updateSickeningFeeeB() {
        var avticketprice = parseFloat(ticketData.ticketpriceeb);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeeseb);
    }

    function updateSickeningFeesT() {
        var avticketprice = parseFloat(ticketData.ticketpricest);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeesst);
    }

    function updateSickeningFeepsh() {
        var avticketprice = parseFloat(ticketData.ticketpricepsh);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeespsh);
    }

    function updateSickeningFeett() {
        var avticketprice = parseFloat(ticketData.ticketpricett);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeestt);
    }

    function updateSickeningFeeetix() {
        var avticketprice = parseFloat(ticketData.ticketpriceetix);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeesetix);
    }

    function updateSickeningFeetw() {
        var avticketprice = parseFloat(ticketData.ticketpricetw);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeestw);
    }

    function updateSickeningFeesc() {
        var avticketprice = parseFloat(ticketData.ticketpricesc);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeessc);
    }

    function updateSickeningFeetxr() {
        var avticketprice = parseFloat(ticketData.ticketpricetxr);
        var dollarfee = 1.39;
        var parecentfee = 3;
        sickeningfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforsick = sickeningfee * parseFloat(ticketData.attendeestxr);
    }


    // Function to handle calculations and update Eventbrite fee
    function updateEventbriteFeeeB() {
        var selectedbrand = $(".developerhubsslider").find("#brandseb").val();
        var avticketprice = parseFloat(ticketData.ticketpriceeb);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeeseb);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpriceeb").val();
        var ev_py = jQuery("#eventseb").val();
        var at_pe = jQuery("#attendeeseb").val();

        var platform_p = 3.70;
        var platform_f = 1.79;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var savings = c_total_save;
        // console.log('savings');
        // console.log(savings);
        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbriteeB").text('$ ' + savings);
        // $("#switchfromeventbriteeB").text('$ ' + '100');
    }
    function updateEventbriteFeesT() {
        var selectedbrand = $(".developerhubsslider").find("#brandsst").val();
        var avticketprice = parseFloat(ticketData.ticketpricest);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeesst);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpricest").val();
        var ev_py = jQuery("#eventsst").val();
        var at_pe = jQuery("#attendeesst").val();

        var platform_p = 5;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbritest").text('$ ' + savings);
    }
    function updateEventbriteFeepsh() {
        var selectedbrand = $(".developerhubsslider").find("#brandspsh").val();
        var avticketprice = parseFloat(ticketData.ticketpricepsh);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeespsh);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpricepsh").val();
        var ev_py = jQuery("#eventspsh").val();
        var at_pe = jQuery("#attendeespsh").val();

        var platform_p = 10;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbritepsh").text('$ ' + savings);
    }
    function updateEventbriteFeett() {
        var selectedbrand = $(".developerhubsslider").find("#brandstt").val();
        var avticketprice = parseFloat(ticketData.ticketpricett);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeestt);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpricett").val();
        var ev_py = jQuery('#eventstt').val();
        var at_pe = jQuery("#attendeestt").val();

        var platform_p = 30;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbritett").text('$ ' + savings);
    }
    function updateEventbriteFeeetix() {
        var selectedbrand = $(".developerhubsslider").find("#brandsetix").val();
        var avticketprice = parseFloat(ticketData.ticketpriceetix);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeesetix);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpriceetix").val();
        var ev_py = jQuery('#eventsetix').val();
        var at_pe = jQuery("#attendeesetix").val();

        var platform_p = 10;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbriteetix").text('$ ' + savings);
    }
    function updateEventbriteFeetw() {
        var selectedbrand = $(".developerhubsslider").find("#brandstw").val();
        var avticketprice = parseFloat(ticketData.ticketpricetw);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeestw);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpricetw").val();
        var ev_py = jQuery('#eventstw').val();
        var at_pe = jQuery("#attendeestw").val();

        var platform_p = 6;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbritetw").text('$ ' + savings);
    }
    function updateEventbriteFeesc() {
        var selectedbrand = $(".developerhubsslider").find("#brandssc").val();
        var avticketprice = parseFloat(ticketData.ticketpricesc);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeessc);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpricesc").val();
        var ev_py = jQuery('#eventssc').val();
        var at_pe = jQuery("#attendeessc").val();

        var platform_p = 7.50;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbritesc").text('$ ' + savings);
    }
    function updateEventbriteFeetxr() {
        var selectedbrand = $(".developerhubsslider").find("#brandstxr").val();
        var avticketprice = parseFloat(ticketData.ticketpricetxr);
        console.log(brands[selectedbrand].dollarfee);
        var dollarfee = brands[selectedbrand].dollarfee;
        var parecentfee = brands[selectedbrand].parecentfee;
        otherplatformfee = avticketprice * (parecentfee / 100) + dollarfee;
        estimatedforeventbrite = otherplatformfee * parseFloat(ticketData.attendeestxr);
        var savings = (estimatedforeventbrite - estimatedforsick).toFixed(2);
        var savings = parseInt(savings);
        var savings = savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        var savings = savings.replace("-", "");

        var avg_t = jQuery("#ticketpricetxr").val();
        var ev_py = jQuery('#eventstxr').val();
        var at_pe = jQuery("#attendeestxr").val();

        var platform_p = 4.20;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        var savings = c_total_save;

        // var savings = (otherplatformfee - sickeningfee).toFixed(2);
        $("#switchfromeventbritetxr").text('$ ' + savings);
    }

    $(".developerhub").find("#brands").on("change",function(){
        updateSickeningFeeeB();
        updateEventbriteFeeeB();
        updateEstimatedSaleseB();  
    })
    // Function to handle calculations and update estimated sales value
    function updateEstimatedSaleseB() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpriceeb) * (parseFloat(ticketData.attendeeseb) * parseFloat(ticketData.eventseb));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsaleseB").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalessT() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpricest) * (parseFloat(ticketData.attendeesst) * parseFloat(ticketData.eventsst));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalesst").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalespsh() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpricepsh) * (parseFloat(ticketData.attendeespsh) * parseFloat(ticketData.eventspsh));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalespsh").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalestt() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpricett) * (parseFloat(ticketData.attendeestt) * parseFloat(ticketData.eventstt));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalestt").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalesetix() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpriceetix) * (parseFloat(ticketData.attendeesetix) * parseFloat(ticketData.eventsetix));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalesetix").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalestw() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpricetw) * (parseFloat(ticketData.attendeestw) * parseFloat(ticketData.eventstw));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalestw").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalessc() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpricesc) * (parseFloat(ticketData.attendeessc) * parseFloat(ticketData.eventssc));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalessc").text('$ ' + estimatedsalesvalue);
    }
    function updateEstimatedSalestxr() {
        var estimatedsalesvalue = parseFloat(ticketData.ticketpricetxr) * (parseFloat(ticketData.attendeestxr) * parseFloat(ticketData.eventstxr));
        var estimatedsalesvalue = estimatedsalesvalue.toFixed(2);
        var estimatedsalesvalue = parseInt(estimatedsalesvalue);
        var estimatedsalesvalue = estimatedsalesvalue.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        $("#estimatedsalestxr").text('$ ' + estimatedsalesvalue);
    }

    // Loop through range inputs and set initial values
    rangeInputs.each(function() {
        var value = $(this).val();
        var idofthat = $(this).attr('id');
        updatePageElements(idofthat, value);

        if (ticketData.hasOwnProperty(idofthat)) {
            ticketData[idofthat] = parseInt(value);
        }
    });
    rangeInputsslider.each(function() {
        var value = $(this).val();
        var idofthat = $(this).attr('id');
        updatePageElements(idofthat, value);

        if (ticketData.hasOwnProperty(idofthat)) {
            ticketData[idofthat] = parseInt(value);
        }
    });

    // Perform initial calculations
    updateSickeningFeeeB();
    updateSickeningFeesT();
    updateSickeningFeepsh();
    updateSickeningFeett();
    updateSickeningFeeetix();
    updateSickeningFeetw();
    updateSickeningFeesc();
    updateSickeningFeetxr();
    updateEventbriteFeeeB();
    updateEventbriteFeesT();
    updateEventbriteFeepsh();
    updateEventbriteFeett();
    updateEventbriteFeeetix();
    updateEventbriteFeetw();
    updateEventbriteFeesc();
    updateEventbriteFeetxr();
    updateEstimatedSaleseB();
    updateEstimatedSalessT();
    updateEstimatedSalespsh();
    updateEstimatedSalestt();
    updateEstimatedSalesetix();
    updateEstimatedSalestw();
    updateEstimatedSalessc();
    updateEstimatedSalestxr();

    // Add a change event handler to the range input
    rangeInputs.on('input', function() {
        var value = $(this).val();
        var idofthat = $(this).attr('id');
        updatePageElements(idofthat, value);

        if (ticketData.hasOwnProperty(idofthat)) {
            ticketData[idofthat] = parseInt(value);
            updateSickeningFeeeB();
            updateEventbriteFeeeB();
            updateEstimatedSaleseB();
        }
    });
    rangeInputsslider.on('input', function() {
        var value = $(this).val();
        var idofthat = $(this).attr('id');
        // console.log('value');
        updatePageElements(idofthat, value);

        if (ticketData.hasOwnProperty(idofthat)) {
            ticketData[idofthat] = parseInt(value);
            updateSickeningFeeeB();
            updateSickeningFeesT();
            updateSickeningFeepsh();
            updateSickeningFeett();
            updateSickeningFeeetix();
            updateSickeningFeetw();
            updateSickeningFeesc();
            updateSickeningFeetxr();
            updateEventbriteFeeeB();
            updateEventbriteFeesT();
            updateEventbriteFeepsh();
            updateEventbriteFeett();
            updateEventbriteFeeetix();
            updateEventbriteFeetw();
            updateEventbriteFeesc();
            updateEventbriteFeetxr();
            updateEstimatedSaleseB();
            updateEstimatedSalessT();
            updateEstimatedSalespsh();
            updateEstimatedSalestt();
            updateEstimatedSalesetix();
            updateEstimatedSalestw();
            updateEstimatedSalessc();
            updateEstimatedSalestxr();
        }
    });
    rangeInputsslider.on('change', function() {
        var value = $(this).val();
        var idofthat = $(this).attr('id');
        // console.log('value');
        updatePageElements(idofthat, value);

        if (ticketData.hasOwnProperty(idofthat)) {
            ticketData[idofthat] = parseInt(value);
            updateSickeningFeeeB();
            updateSickeningFeesT();
            updateSickeningFeepsh();
            updateSickeningFeett();
            updateSickeningFeeetix();
            updateSickeningFeetw();
            updateSickeningFeesc();
            updateSickeningFeetxr();
            updateEventbriteFeeeB();
            updateEventbriteFeesT();
            updateEventbriteFeepsh();
            updateEventbriteFeett();
            updateEventbriteFeeetix();
            updateEventbriteFeetw();
            updateEventbriteFeesc();
            updateEventbriteFeetxr();
            updateEstimatedSaleseB();
            updateEstimatedSalessT();
            updateEstimatedSalespsh();
            updateEstimatedSalestt();
            updateEstimatedSalesetix();
            updateEstimatedSalestw();
            updateEstimatedSalessc();
            updateEstimatedSalestxr();
        }
    });
	
    jQuery('input#eventseb').on('change', function() {
        var avg_t = jQuery("#ticketpriceeb").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeeseb").val();

        var platform_p = 3.70;
        var platform_f = 1.79;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        // var c_total_save = c_total_save.toFixed(2);
        jQuery('#switchfromeventbriteeB').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpriceeb').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventseb").val();
        var at_pe = jQuery("#attendeeseb").val();

        var platform_p = 3.70;
        var platform_f = 1.79;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        // var c_total_save = c_total_save.toFixed(2);
        jQuery('#switchfromeventbriteeB').html('$ ' + c_total_save);
    });
    jQuery('input#attendeeseb').on('change', function() {
        var avg_t = jQuery("#ticketpriceeb").val();
        var ev_py = jQuery("#eventseb").val();
        var at_pe = jQuery(this).val();

        var platform_p = 3.70;
        var platform_f = 1.79;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        // var c_total_save = c_total_save.toFixed(2);
        jQuery('#switchfromeventbriteeB').html('$ ' + c_total_save);
    });

    jQuery('input#eventsst').on('change', function() {
        var avg_t = jQuery("#ticketpricest").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeesst").val();

        var platform_p = 5;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritest').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpricest').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventsst").val();
        var at_pe = jQuery("#attendeesst").val();

        var platform_p = 5;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritest').html('$ ' + c_total_save);
    });
    jQuery('input#attendeesst').on('change', function() {
        var avg_t = jQuery("#ticketpricest").val();
        var ev_py = jQuery("#eventsst").val();
        var at_pe = jQuery(this).val();

        var platform_p = 5;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritest').html('$ ' + c_total_save);
    });

    jQuery('input#eventspsh').on('change', function() {
        var avg_t = jQuery("#ticketpricepsh").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeespsh").val();

        var platform_p = 10;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritepsh').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpricepsh').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventspsh").val();
        var at_pe = jQuery("#attendeespsh").val();

        var platform_p = 10;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritepsh').html('$ ' + c_total_save);
    });
    jQuery('input#attendeespsh').on('change', function() {
        var avg_t = jQuery("#ticketpricepsh").val();
        var ev_py = jQuery("#eventspsh").val();
        var at_pe = jQuery(this).val();

        var platform_p = 10;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritepsh').html('$ ' + c_total_save);
    });

    jQuery('input#eventstt').on('change', function() {
        var avg_t = jQuery("#ticketpricett").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeestt").val();

        var platform_p = 30;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritett').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpricett').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventstt").val();
        var at_pe = jQuery("#attendeestt").val();

        var platform_p = 30;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritett').html('$ ' + c_total_save);
    });
    jQuery('input#attendeestt').on('change', function() {
        var avg_t = jQuery("#ticketpricett").val();
        var ev_py = jQuery("#eventstt").val();
        var at_pe = jQuery(this).val();

        var platform_p = 30;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritett').html('$ ' + c_total_save);
    });

    jQuery('input#eventsetix').on('change', function() {
        var avg_t = jQuery("#ticketpriceetix").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeesetix").val();

        var platform_p = 10;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbriteetix').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpriceetix').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventsetix").val();
        var at_pe = jQuery("#attendeesetix").val();

        var platform_p = 10;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbriteetix').html('$ ' + c_total_save);
    });
    jQuery('input#attendeesetix').on('change', function() {
        var avg_t = jQuery("#ticketpriceetix").val();
        var ev_py = jQuery("#eventsetix").val();
        var at_pe = jQuery(this).val();

        var platform_p = 10;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbriteetix').html('$ ' + c_total_save);
    });

    jQuery('input#eventstw').on('change', function() {
        var avg_t = jQuery("#ticketpricetw").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeestw").val();

        var platform_p = 6;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritetw').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpricetw').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventstw").val();
        var at_pe = jQuery("#attendeestw").val();

        var platform_p = 6;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritetw').html('$ ' + c_total_save);
    });
    jQuery('input#attendeestw').on('change', function() {
        var avg_t = jQuery("#ticketpricetw").val();
        var ev_py = jQuery("#eventstw").val();
        var at_pe = jQuery(this).val();

        var platform_p = 6;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritetw').html('$ ' + c_total_save);
    });

    jQuery('input#eventssc').on('change', function() {
        var avg_t = jQuery("#ticketpricesc").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeessc").val();

        var platform_p = 7.50;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritesc').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpricesc').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventssc").val();
        var at_pe = jQuery("#attendeessc").val();

        var platform_p = 7.50;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritesc').html('$ ' + c_total_save);
    });
    jQuery('input#attendeessc').on('change', function() {
        var avg_t = jQuery("#ticketpricesc").val();
        var ev_py = jQuery("#eventssc").val();
        var at_pe = jQuery(this).val();

        var platform_p = 7.50;
        var platform_f = 0;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritesc').html('$ ' + c_total_save);
    });

    jQuery('input#eventstxr').on('change', function() {
        var avg_t = jQuery("#ticketpricetxr").val();
        var ev_py = jQuery(this).val();
        var at_pe = jQuery("#attendeestxr").val();

        var platform_p = 4.20;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritetxr').html('$ ' + c_total_save);
    });
    jQuery('input#ticketpricetxr').on('change', function() {
        var avg_t = jQuery(this).val();
        var ev_py = jQuery("#eventstxr").val();
        var at_pe = jQuery("#attendeestxr").val();

        var platform_p = 4.20;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritetxr').html('$ ' + c_total_save);
    });
    jQuery('input#attendeestxr').on('change', function() {
        var avg_t = jQuery("#ticketpricetxr").val();
        var ev_py = jQuery("#eventstxr").val();
        var at_pe = jQuery(this).val();

        var platform_p = 4.20;
        var platform_f = 0.99;
        var c_total_save = dh_update_savings_price(avg_t, ev_py, at_pe, platform_p, platform_f);
        var c_total_save = c_total_save.replace("-", "");
        jQuery('#switchfromeventbritetxr').html('$ ' + c_total_save);
    });

    function dh_update_savings_price(avg_p, ev_py, at_pe, platform_p, platform_f) {
        var avg_t = parseInt(avg_p);
        var ev_py = parseInt(ev_py);
        var at_pe = parseInt(at_pe);

        var sick_pf = 3;
        var sick_df = 1.39;
        var platform_p = platform_p;
        var platform_f = platform_f;

        var s1 = avg_t * (sick_pf / 100);
        var s1b = (s1 + sick_df).toFixed(2);
        var s1c = avg_t + Number(s1b);
        var s1d = s1c * (ev_py * at_pe);

        var os1 = avg_t * (platform_p / 100);
        var os1b = (os1 + platform_f).toFixed(2);
        var os1c = avg_t + Number(os1b);
        var os1d = os1c * (ev_py * at_pe);

        var t_savings = Number(os1d) - Number(s1d);

        var c_total_save = t_savings.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
        return c_total_save;
    }
	
       // Initialize Select2 on the #mySelect element

//        jQuery('#brands').select2({
//           templateResult: formatOption, // Custom function to format the option with an image
//           escapeMarkup: function (markup) { return markup; } // Allows displaying images as HTML
//         });
  
//       // Custom function to format the option with an image
//       function formatOption(option) {
//         if (!option.id) {
//           return option.text;
//         }
  
//         var image = $(option.element).data('image');
//         if (!image) {
//           return option.text;
//         }
  
//         return $('<span><img src="' + image + '" class="option-image" /> ' + option.text + '</span>');
//       }
	
});

document.addEventListener("DOMContentLoaded", function() {
    const avgTpInput = document.querySelectorAll(".avg-t-p-input");
    const avgTpSpan = document.querySelectorAll(".avg-t-p-span");

    const avgApeInput = document.querySelectorAll(".avg-a-p-e-input");
    const avgApeSpan = document.querySelectorAll(".avg-a-p-e-span");

    const eventsPyInput = document.querySelectorAll(".events-p-y-input");
    const eventsPySpan = document.querySelectorAll(".events-p-y-span");

    avgTpInput.forEach(function(input) {
        input.addEventListener("change", function(event) {
            const newValue = event.target.value;
            const fieldid = event.target.id;

            avgTpInput.forEach(function(syncInput) {
                syncInput.value = newValue;
                jQuery(avgTpSpan).text(newValue);
                if (syncInput.id) {
                    // jQuery(syncInput.id).trigger("input");
                    jQuery(syncInput).trigger("change");
                    // console.log('fieldid');
                    // console.log(syncInput);
                }
            });
        });
    });

    avgApeInput.forEach(function(input) {
        input.addEventListener("change", function(event) {
            const newValue = event.target.value;
            const fieldid = event.target.id;

            avgApeInput.forEach(function(syncInput) {
                syncInput.value = newValue;
                jQuery(avgApeSpan).text(newValue);
                if (syncInput.id) {
                    // jQuery(syncInput.id).trigger("input");
                    jQuery(syncInput).trigger("change");
                    // console.log('fieldid');
                    // console.log(syncInput);
                }
            });
        });
    });

    eventsPyInput.forEach(function(input) {
        input.addEventListener("change", function(event) {
            const newValue = event.target.value;
            const fieldid = event.target.id;

            eventsPyInput.forEach(function(syncInput) {
                syncInput.value = newValue;
                jQuery(eventsPySpan).text(newValue);
                if (syncInput.id) {
                    // jQuery(syncInput.id).trigger("input");
                    jQuery(syncInput).trigger("change");
                    // console.log('fieldid');
                    // console.log(syncInput);
                }
            });
        });
    });
});



  