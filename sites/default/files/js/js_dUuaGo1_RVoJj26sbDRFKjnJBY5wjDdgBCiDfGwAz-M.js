(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
/* $Id: admin_menu.js,v 1.32 2010/02/20 23:44:00 sun Exp $ */
(function($) {

Drupal.admin = Drupal.admin || {};
Drupal.admin.behaviors = Drupal.admin.behaviors || {};
Drupal.admin.hashes = Drupal.admin.hashes || {};

/**
 * Core behavior for Administration menu.
 *
 * Test whether there is an administration menu is in the output and execute all
 * registered behaviors.
 */
Drupal.behaviors.adminMenu = {
  attach: function (context, settings) {
    // Initialize settings.
    settings.admin_menu = $.extend({
      suppress: false,
      margin_top: false,
      position_fixed: false,
      tweak_modules: false,
      tweak_permissions: false,
      tweak_tabs: false,
      destination: '',
      basePath: settings.basePath,
      hash: 0,
      replacements: {}
    }, settings.admin_menu || {});
    // Check whether administration menu should be suppressed.
    if (settings.admin_menu.suppress) {
      return;
    }
    var $adminMenu = $('#admin-menu:not(.admin-menu-processed)', context);
    // Client-side caching; if administration menu is not in the output, it is
    // fetched from the server and cached in the browser.
    if (!$adminMenu.length && settings.admin_menu.hash) {
      Drupal.admin.getCache(settings.admin_menu.hash, function (response) {
          if (typeof response == 'string' && response.length > 0) {
            $('body', context).prepend(response);
          }
          var $adminMenu = $('#admin-menu:not(.admin-menu-processed)', context);
          // Apply our behaviors.
          Drupal.admin.attachBehaviors(context, settings, $adminMenu);
      });
    }
    // If the menu is in the output already, this means there is a new version.
    else {
      // Apply our behaviors.
      Drupal.admin.attachBehaviors(context, settings, $adminMenu);
    }
  }
};

/**
 * Collapse fieldsets on Modules page.
 */
Drupal.behaviors.adminMenuCollapseModules = {
  attach: function (context, settings) {
    if (settings.admin_menu.tweak_modules) {
      $('#system-modules fieldset:not(.collapsed)', context).addClass('collapsed');
    }
  }
};

/**
 * Collapse modules on Permissions page.
 */
Drupal.behaviors.adminMenuCollapsePermissions = {
  attach: function (context, settings) {
    if (settings.admin_menu.tweak_permissions) {
      // Freeze width of first column to prevent jumping.
      $('#permissions th:first', context).css({ width: $('#permissions th:first', context).width() });
      // Attach click handler.
      $('#permissions tr:has(td.module)', context).once('admin-menu-tweak-permissions', function () {
        var $module = $(this);
        $module.bind('click.admin-menu', function () {
          // @todo Replace with .nextUntil() in jQuery 1.4.
          $module.nextAll().each(function () {
            var $row = $(this);
            if ($row.is(':has(td.module)')) {
              return false;
            }
            $row.toggleClass('element-hidden');
          });
        });
      }).trigger('click.admin-menu');
    }
  }
};

/**
 * Apply margin to page.
 *
 * Note that directly applying marginTop does not work in IE. To prevent
 * flickering/jumping page content with client-side caching, this is a regular
 * Drupal behavior.
 */
Drupal.behaviors.adminMenuMarginTop = {
  attach: function (context, settings) {
    if (!settings.admin_menu.suppress && settings.admin_menu.margin_top) {
      $('body:not(.admin-menu)', context).addClass('admin-menu');
    }
  }
};

/**
 * Retrieve content from client-side cache.
 *
 * @param hash
 *   The md5 hash of the content to retrieve.
 * @param onSuccess
 *   A callback function invoked when the cache request was successful.
 */
Drupal.admin.getCache = function (hash, onSuccess) {
  if (Drupal.admin.hashes.hash !== undefined) {
    return Drupal.admin.hashes.hash;
  }
  $.ajax({
    cache: true,
    type: 'GET',
    dataType: 'text', // Prevent auto-evaluation of response.
    global: false, // Do not trigger global AJAX events.
    url: Drupal.settings.admin_menu.basePath.replace(/admin_menu/, 'js/admin_menu/cache/' + hash),
    success: onSuccess,
    complete: function (XMLHttpRequest, status) {
      Drupal.admin.hashes.hash = status;
    }
  });
}

/**
 * @defgroup admin_behaviors Administration behaviors.
 * @{
 */

/**
 * Attach administrative behaviors.
 */
Drupal.admin.attachBehaviors = function (context, settings, $adminMenu) {
  if ($adminMenu.length) {
    $adminMenu.addClass('admin-menu-processed');
    $.each(Drupal.admin.behaviors, function() {
      this(context, settings, $adminMenu);
    });
  }
};

/**
 * Apply 'position: fixed'.
 */
Drupal.admin.behaviors.positionFixed = function (context, settings, $adminMenu) {
  if (settings.admin_menu.position_fixed) {
    $adminMenu.addClass('admin-menu-position-fixed');
    $adminMenu.css('position', 'fixed');
  }
};

/**
 * Move page tabs into administration menu.
 */
Drupal.admin.behaviors.pageTabs = function (context, settings, $adminMenu) {
  if (settings.admin_menu.tweak_tabs) {
    $('ul.tabs.primary li', context).addClass('admin-menu-tab').appendTo('#admin-menu-wrapper > ul');
    $('ul.tabs.secondary', context).appendTo('#admin-menu-wrapper > ul > li.admin-menu-tab.active').removeClass('secondary');
    $('ul.tabs.primary', context).remove();
  }
};

/**
 * Perform dynamic replacements in cached menu.
 */
Drupal.admin.behaviors.replacements = function (context, settings, $adminMenu) {
  for (var item in settings.admin_menu.replacements) {
    $(item, $adminMenu).html(settings.admin_menu.replacements[item]);
  }
}

/**
 * Inject destination query strings for current page.
 */
Drupal.admin.behaviors.destination = function (context, settings, $adminMenu) {
  if (settings.admin_menu.destination) {
    $('a.admin-menu-destination', $adminMenu).each(function() {
      this.search += (!this.search.length ? '?' : '&') + Drupal.settings.admin_menu.destination;
    });
  }
}

/**
 * Apply JavaScript-based hovering behaviors.
 *
 * @todo This has to run last.  If another script registers additional behaviors
 *   it will not run last.
 */
Drupal.admin.behaviors.hover = function (context, settings, $adminMenu) {
  // Hover emulation for IE 6.
  if ($.browser.msie && parseInt(jQuery.browser.version) == 6) {
    $('li', $adminMenu).hover(
      function () {
        $(this).addClass('iehover');
      },
      function () {
        $(this).removeClass('iehover');
      }
    );
  }

  // Delayed mouseout.
  $('li.expandable', $adminMenu).hover(
    function () {
      // Stop the timer.
      clearTimeout(this.sfTimer);
      // Display child lists.
      $('> ul', this)
        .css({left: 'auto', display: 'block'})
        // Immediately hide nephew lists.
        .parent().siblings('li').children('ul').css({left: '-999em', display: 'none'});
    },
    function () {
      // Start the timer.
      var uls = $('> ul', this);
      this.sfTimer = setTimeout(function () {
        uls.css({left: '-999em', display: 'none'});
      }, 400);
    }
  );
};

/**
 * @} End of "defgroup admin_behaviors".
 */

})(jQuery);
;
/*
 * jQuery Form Plugin
 * version: 2.67 (12-MAR-2011)
 * @requires jQuery v1.3.2 or later
 */
(function(b){b.fn.ajaxSubmit=function(t){if(!this.length){a("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof t=="function"){t={success:t}}var h=this.attr("action");var d=(typeof h==="string")?b.trim(h):"";if(d){d=(d.match(/^([^#]+)/)||[])[1]}d=d||window.location.href||"";t=b.extend(true,{url:d,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var u={};this.trigger("form-pre-serialize",[this,t,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(t.beforeSerialize&&t.beforeSerialize(this,t)===false){a("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var f,p,m=this.formToArray(t.semantic);if(t.data){t.extraData=t.data;for(f in t.data){if(t.data[f] instanceof Array){for(var i in t.data[f]){m.push({name:f,value:t.data[f][i]})}}else{p=t.data[f];p=b.isFunction(p)?p():p;m.push({name:f,value:p})}}}if(t.beforeSubmit&&t.beforeSubmit(m,this,t)===false){a("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[m,this,t,u]);if(u.veto){a("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var c=b.param(m);if(t.type.toUpperCase()=="GET"){t.url+=(t.url.indexOf("?")>=0?"&":"?")+c;t.data=null}else{t.data=c}var s=this,l=[];if(t.resetForm){l.push(function(){s.resetForm()})}if(t.clearForm){l.push(function(){s.clearForm()})}if(!t.dataType&&t.target){var r=t.success||function(){};l.push(function(n){var k=t.replaceTarget?"replaceWith":"html";b(t.target)[k](n).each(r,arguments)})}else{if(t.success){l.push(t.success)}}t.success=function(w,n,x){var v=t.context||t;for(var q=0,k=l.length;q<k;q++){l[q].apply(v,[w,n,x||s,s])}};var g=b("input:file",this).length>0;var e="multipart/form-data";var j=(s.attr("enctype")==e||s.attr("encoding")==e);if(t.iframe!==false&&(g||t.iframe||j)){if(t.closeKeepAlive){b.get(t.closeKeepAlive,o)}else{o()}}else{b.ajax(t)}this.trigger("form-submit-notify",[this,t]);return this;function o(){var v=s[0];if(b(":input[name=submit],:input[id=submit]",v).length){alert('Error: Form elements must not have name or id of "submit".');return}var B=b.extend(true,{},b.ajaxSettings,t);B.context=B.context||B;var E="jqFormIO"+(new Date().getTime()),z="_"+E;var w=b('<iframe id="'+E+'" name="'+E+'" src="'+B.iframeSrc+'" />');var A=w[0];w.css({position:"absolute",top:"-1000px",left:"-1000px"});var x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){a("aborting upload...");var n="aborted";this.aborted=1;w.attr("src",B.iframeSrc);x.error=n;B.error&&B.error.call(B.context,x,"error",n);I&&b.event.trigger("ajaxError",[x,B,n]);B.complete&&B.complete.call(B.context,x,"error")}};var I=B.global;if(I&&!b.active++){b.event.trigger("ajaxStart")}if(I){b.event.trigger("ajaxSend",[x,B])}if(B.beforeSend&&B.beforeSend.call(B.context,x,B)===false){if(B.global){b.active--}return}if(x.aborted){return}var H=0;var y=v.clk;if(y){var F=y.name;if(F&&!y.disabled){B.extraData=B.extraData||{};B.extraData[F]=y.value;if(y.type=="image"){B.extraData[F+".x"]=v.clk_x;B.extraData[F+".y"]=v.clk_y}}}function G(){var O=s.attr("target"),M=s.attr("action");v.setAttribute("target",E);if(v.getAttribute("method")!="POST"){v.setAttribute("method","POST")}if(v.getAttribute("action")!=B.url){v.setAttribute("action",B.url)}if(!B.skipEncodingOverride){s.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(B.timeout){setTimeout(function(){H=true;D()},B.timeout)}var N=[];try{if(B.extraData){for(var P in B.extraData){N.push(b('<input type="hidden" name="'+P+'" value="'+B.extraData[P]+'" />').appendTo(v)[0])}}w.appendTo("body");A.attachEvent?A.attachEvent("onload",D):A.addEventListener("load",D,false);v.submit()}finally{v.setAttribute("action",M);if(O){v.setAttribute("target",O)}else{s.removeAttr("target")}b(N).remove()}}if(B.forceSync){G()}else{setTimeout(G,10)}var K,L,J=50;function D(){if(x.aborted){return}var R=A.contentWindow?A.contentWindow.document:A.contentDocument?A.contentDocument:A.document;if(!R||R.location.href==B.iframeSrc){return}A.detachEvent?A.detachEvent("onload",D):A.removeEventListener("load",D,false);var N=true;try{if(H){throw"timeout"}var S=B.dataType=="xml"||R.XMLDocument||b.isXMLDoc(R);a("isXml="+S);if(!S&&window.opera&&(R.body==null||R.body.innerHTML=="")){if(--J){a("requeing onLoad callback, DOM not available");setTimeout(D,250);return}}x.responseText=R.body?R.body.innerHTML:R.documentElement?R.documentElement.innerHTML:null;x.responseXML=R.XMLDocument?R.XMLDocument:R;x.getResponseHeader=function(U){var T={"content-type":B.dataType};return T[U]};var Q=/(json|script)/.test(B.dataType);if(Q||B.textarea){var M=R.getElementsByTagName("textarea")[0];if(M){x.responseText=M.value}else{if(Q){var P=R.getElementsByTagName("pre")[0];var n=R.getElementsByTagName("body")[0];if(P){x.responseText=P.textContent}else{if(n){x.responseText=n.innerHTML}}}}}else{if(B.dataType=="xml"&&!x.responseXML&&x.responseText!=null){x.responseXML=C(x.responseText)}}K=k(x,B.dataType,B)}catch(O){a("error caught:",O);N=false;x.error=O;B.error&&B.error.call(B.context,x,"error",O);I&&b.event.trigger("ajaxError",[x,B,O])}if(x.aborted){a("upload aborted");N=false}if(N){B.success&&B.success.call(B.context,K,"success",x);I&&b.event.trigger("ajaxSuccess",[x,B])}I&&b.event.trigger("ajaxComplete",[x,B]);if(I&&!--b.active){b.event.trigger("ajaxStop")}B.complete&&B.complete.call(B.context,x,N?"success":"error");setTimeout(function(){w.removeData("form-plugin-onload");w.remove();x.responseXML=null},100)}var C=b.parseXML||function(n,M){if(window.ActiveXObject){M=new ActiveXObject("Microsoft.XMLDOM");M.async="false";M.loadXML(n)}else{M=(new DOMParser()).parseFromString(n,"text/xml")}return(M&&M.documentElement&&M.documentElement.nodeName!="parsererror")?M:null};var q=b.parseJSON||function(n){return window["eval"]("("+n+")")};var k=function(Q,O,N){var M=Q.getResponseHeader("content-type")||"",n=O==="xml"||!O&&M.indexOf("xml")>=0,P=n?Q.responseXML:Q.responseText;if(n&&P.documentElement.nodeName==="parsererror"){b.error&&b.error("parsererror")}if(N&&N.dataFilter){P=N.dataFilter(P,O)}if(typeof P==="string"){if(O==="json"||!O&&M.indexOf("json")>=0){P=q(P)}else{if(O==="script"||!O&&M.indexOf("javascript")>=0){b.globalEval(P)}}}return P}}};b.fn.ajaxForm=function(c){if(this.length===0){var d={s:this.selector,c:this.context};if(!b.isReady&&d.s){a("DOM not ready, queuing ajaxForm");b(function(){b(d.s,d.c).ajaxForm(c)});return this}a("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(f){if(!f.isDefaultPrevented()){f.preventDefault();b(this).ajaxSubmit(c)}}).bind("click.form-plugin",function(j){var i=j.target;var g=b(i);if(!(g.is(":submit,input:image"))){var f=g.closest(":submit");if(f.length==0){return}i=f[0]}var h=this;h.clk=i;if(i.type=="image"){if(j.offsetX!=undefined){h.clk_x=j.offsetX;h.clk_y=j.offsetY}else{if(typeof b.fn.offset=="function"){var k=g.offset();h.clk_x=j.pageX-k.left;h.clk_y=j.pageY-k.top}else{h.clk_x=j.pageX-i.offsetLeft;h.clk_y=j.pageY-i.offsetTop}}}setTimeout(function(){h.clk=h.clk_x=h.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(q){var p=[];if(this.length===0){return p}var d=this[0];var g=q?d.getElementsByTagName("*"):d.elements;if(!g){return p}var k,h,f,r,e,m,c;for(k=0,m=g.length;k<m;k++){e=g[k];f=e.name;if(!f){continue}if(q&&d.clk&&e.type=="image"){if(!e.disabled&&d.clk==e){p.push({name:f,value:b(e).val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}continue}r=b.fieldValue(e,true);if(r&&r.constructor==Array){for(h=0,c=r.length;h<c;h++){p.push({name:f,value:r[h]})}}else{if(r!==null&&typeof r!="undefined"){p.push({name:f,value:r})}}}if(!q&&d.clk){var l=b(d.clk),o=l[0];f=o.name;if(f&&!o.disabled&&o.type=="image"){p.push({name:f,value:l.val()});p.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})}}return p};b.fn.formSerialize=function(c){return b.param(this.formToArray(c))};b.fn.fieldSerialize=function(d){var c=[];this.each(function(){var h=this.name;if(!h){return}var f=b.fieldValue(this,d);if(f&&f.constructor==Array){for(var g=0,e=f.length;g<e;g++){c.push({name:h,value:f[g]})}}else{if(f!==null&&typeof f!="undefined"){c.push({name:this.name,value:f})}}});return b.param(c)};b.fn.fieldValue=function(h){for(var g=[],e=0,c=this.length;e<c;e++){var f=this[e];var d=b.fieldValue(f,h);if(d===null||typeof d=="undefined"||(d.constructor==Array&&!d.length)){continue}d.constructor==Array?b.merge(g,d):g.push(d)}return g};b.fieldValue=function(c,j){var e=c.name,p=c.type,q=c.tagName.toLowerCase();if(j===undefined){j=true}if(j&&(!e||c.disabled||p=="reset"||p=="button"||(p=="checkbox"||p=="radio")&&!c.checked||(p=="submit"||p=="image")&&c.form&&c.form.clk!=c||q=="select"&&c.selectedIndex==-1)){return null}if(q=="select"){var k=c.selectedIndex;if(k<0){return null}var m=[],d=c.options;var g=(p=="select-one");var l=(g?k+1:d.length);for(var f=(g?k:0);f<l;f++){var h=d[f];if(h.selected){var o=h.value;if(!o){o=(h.attributes&&h.attributes.value&&!(h.attributes.value.specified))?h.text:h.value}if(g){return o}m.push(o)}}return m}return b(c).val()};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var d=this.type,c=this.tagName.toLowerCase();if(d=="text"||d=="password"||c=="textarea"){this.value=""}else{if(d=="checkbox"||d=="radio"){this.checked=false}else{if(c=="select"){this.selectedIndex=-1}}}})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};b.fn.enable=function(c){if(c===undefined){c=true}return this.each(function(){this.disabled=!c})};b.fn.selected=function(c){if(c===undefined){c=true}return this.each(function(){var d=this.type;if(d=="checkbox"||d=="radio"){this.checked=c}else{if(this.tagName.toLowerCase()=="option"){var e=b(this).parent("select");if(c&&e[0]&&e[0].type=="select-one"){e.find("option").selected(false)}this.selected=c}}})};function a(){if(b.fn.ajaxSubmit.debug){var c="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(c)}else{if(window.opera&&window.opera.postError){window.opera.postError(c)}}}}})(jQuery);
;

(function($) {
//Global container.
window.imce = {tree: {}, findex: [], fids: {}, selected: {}, selcount: 0, ops: {}, cache: {}, urlId: {},
vars: {previewImages: 1, cache: 1},
hooks: {load: [], list: [], navigate: [], cache: []},

//initiate imce.
initiate: function() {
  imce.conf = Drupal.settings.imce || {};
  if (imce.conf.error != false) return;
  imce.FLW = imce.el('file-list-wrapper'), imce.SBW = imce.el('sub-browse-wrapper');
  imce.NW = imce.el('navigation-wrapper'), imce.BW = imce.el('browse-wrapper');
  imce.PW = imce.el('preview-wrapper'), imce.FW = imce.el('forms-wrapper');
  imce.updateUI();
  imce.prepareMsgs();//process initial status messages
  imce.initiateTree();//build directory tree
  imce.hooks.list.unshift(imce.processRow);//set the default list-hook.
  imce.initiateList();//process file list
  imce.initiateOps();//prepare operation tabs
  imce.refreshOps();
  imce.invoke('load', window);//run functions set by external applications.
},

//process navigation tree
initiateTree: function() {
  $('#navigation-tree li').each(function(i) {
    var a = this.firstChild, txt = a.firstChild;
    txt && (txt.data = imce.decode(txt.data));
    var branch = imce.tree[a.title] = {'a': a, li: this, ul: this.lastChild.tagName == 'UL' ? this.lastChild : null};
    if (a.href) imce.dirClickable(branch);
    imce.dirCollapsible(branch);
  });
},

//Add a dir to the tree under parent
dirAdd: function(dir, parent, clickable) {
  if (imce.tree[dir]) return clickable ? imce.dirClickable(imce.tree[dir]) : imce.tree[dir];
  var parent = parent || imce.tree['.'];
  parent.ul = parent.ul ? parent.ul : parent.li.appendChild(imce.newEl('ul'));
  var branch = imce.dirCreate(dir, imce.decode(dir.substr(dir.lastIndexOf('/')+1)), clickable);
  parent.ul.appendChild(branch.li);
  return branch;
},

//create list item for navigation tree
dirCreate: function(dir, text, clickable) {
  if (imce.tree[dir]) return imce.tree[dir];
  var branch = imce.tree[dir] = {li: imce.newEl('li'), a: imce.newEl('a')};
  $(branch.a).addClass('folder').text(text).attr('title', dir).appendTo(branch.li);
  imce.dirCollapsible(branch);
  return clickable ? imce.dirClickable(branch) : branch;
},

//change currently active directory
dirActivate: function(dir) {
  if (dir != imce.conf.dir) {
    if (imce.tree[imce.conf.dir]){
      $(imce.tree[imce.conf.dir].a).removeClass('active');
    }
    $(imce.tree[dir].a).addClass('active');
    imce.conf.dir = dir;
  }
  return imce.tree[imce.conf.dir];
},

//make a dir accessible
dirClickable: function(branch) {
  if (branch.clkbl) return branch;
  $(branch.a).attr('href', '#').removeClass('disabled').click(function() {imce.navigate(this.title); return false;});
  branch.clkbl = true;
  return branch;
},

//sub-directories expand-collapse ability
dirCollapsible: function (branch) {
  if (branch.clpsbl) return branch;
  $(imce.newEl('span')).addClass('expander').html('&nbsp;').click(function() {
    if (branch.ul) {
      $(branch.ul).toggle();
      $(branch.li).toggleClass('expanded');
      $.browser.msie && $('#navigation-header').css('top', imce.NW.scrollTop);
    }
    else if (branch.clkbl){
      $(branch.a).click();
    }
  }).prependTo(branch.li);
  branch.clpsbl = true;
  return branch;
},

//update navigation tree after getting subdirectories.
dirSubdirs: function(dir, subdirs) {
  var branch = imce.tree[dir];
  if (subdirs && subdirs.length) {
    var prefix = dir == '.' ? '' : dir +'/';
    for (var i in subdirs) {//add subdirectories
      imce.dirAdd(prefix + subdirs[i], branch, true);
    }
    $(branch.li).removeClass('leaf').addClass('expanded');
    $(branch.ul).show();
  }
  else if (!branch.ul){//no subdirs->leaf
    $(branch.li).removeClass('expanded').addClass('leaf');
  }
},

//process file list
initiateList: function(cached) {
  var L = imce.hooks.list, dir = imce.conf.dir, token = {'%dir':  dir == '.' ? $(imce.tree['.'].a).text() : imce.decode(dir)}
  imce.findex = [], imce.fids = {}, imce.selected = {}, imce.selcount = 0, imce.vars.lastfid = null;
  imce.tbody = imce.el('file-list').tBodies[0];
  if (imce.tbody.rows.length) {
    for (var row, i = 0; row = imce.tbody.rows[i]; i++) {
      var fid = row.id;
      imce.findex[i] = imce.fids[fid] = row;
      if (cached) {
        if (imce.hasC(row, 'selected')) {
          imce.selected[imce.vars.lastfid = fid] = row;
          imce.selcount++;
        }
      }
      else {
        for (var func, j = 0; func = L[j]; j++) func(row);//invoke list-hook
      }
    }
  }
  if (!imce.conf.perm.browse) {
    imce.setMessage(Drupal.t('File browsing is disabled in directory %dir.', token), 'error');
  }
},

//add a file to the list. (having properties name,size,formatted size,width,height,date,formatted date)
fileAdd: function(file) {
  var row, fid = file.name, i = imce.findex.length, attr = ['name', 'size', 'width', 'height', 'date'];
  if (!(row = imce.fids[fid])) {
    row = imce.findex[i] = imce.fids[fid] = imce.tbody.insertRow(i);
    for (var i in attr) row.insertCell(i).className = attr[i];
  }
  row.cells[0].innerHTML = row.id = fid;
  row.cells[1].innerHTML = file.fsize; row.cells[1].id = file.size;
  row.cells[2].innerHTML = file.width;
  row.cells[3].innerHTML = file.height;
  row.cells[4].innerHTML = file.fdate; row.cells[4].id = file.date;
  imce.invoke('list', row);
  if (imce.vars.prvfid == fid) imce.setPreview(fid);
  if (file.id) imce.urlId[imce.getURL(fid)] = file.id;
},

//remove a file from the list
fileRemove: function(fid) {
  if (!(row = imce.fids[fid])) return;
  imce.fileDeSelect(fid);
  imce.findex.splice(row.rowIndex, 1);
  $(row).remove();
  delete imce.fids[fid];
  if (imce.vars.prvfid == fid) imce.setPreview();
},

//return a file object containing all properties.
fileGet: function (fid) {
  var row = imce.fids[fid];
  var url = imce.getURL(fid);
  return row ? {
    name: imce.decode(fid),
    url: url,
    size: row.cells[1].innerHTML,
    bytes: row.cells[1].id * 1,
    width: row.cells[2].innerHTML * 1,
    height: row.cells[3].innerHTML * 1,
    date: row.cells[4].innerHTML,
    time: row.cells[4].id * 1,
    id: imce.urlId[url] || 0, //file id for newly uploaded files
    relpath: (imce.conf.dir == '.' ? '' : imce.conf.dir +'/') + fid //rawurlencoded path relative to file directory path.
  } : null;
},

//simulate row click. selection-highlighting
fileClick: function(row, ctrl, shft) {
  if (!row) return;
  var fid = typeof(row) == 'string' ? row : row.id;
  if (ctrl || fid == imce.vars.prvfid) {
    imce.fileToggleSelect(fid);
  }
  else if (shft) {
    var last = imce.lastFid();
    var start = last ? imce.fids[last].rowIndex : -1;
    var end = imce.fids[fid].rowIndex;
    var step = start > end ? -1 : 1;
    while (start != end) {
      start += step;
      imce.fileSelect(imce.findex[start].id);
    }
  }
  else {
    for (var fname in imce.selected) {
      imce.fileDeSelect(fname);
    }
    imce.fileSelect(fid);
  }
  //set preview
  imce.setPreview(imce.selcount == 1 ? imce.lastFid() : null);
},

//file select/deselect functions
fileSelect: function (fid) {
  if (imce.selected[fid] || !imce.fids[fid]) return;
  imce.selected[fid] = imce.fids[imce.vars.lastfid=fid];
  $(imce.selected[fid]).addClass('selected');
  imce.selcount++;
},
fileDeSelect: function (fid) {
  if (!imce.selected[fid] || !imce.fids[fid]) return;
  if (imce.vars.lastfid == fid) imce.vars.lastfid = null;
  $(imce.selected[fid]).removeClass('selected');
  delete imce.selected[fid];
  imce.selcount--;
},
fileToggleSelect: function (fid) {
  imce['file'+ (imce.selected[fid] ? 'De' : '') +'Select'](fid);
},

//process file operation form and create operation tabs.
initiateOps: function() {
  imce.setHtmlOps();
  imce.setUploadOp();//upload
  imce.setFileOps();//thumb, delete, resize
},

//process existing html ops.
setHtmlOps: function () {
  $(imce.el('ops-list')).children('li').each(function() {
    if (!this.firstChild) return $(this).remove();
    var name = this.id.substr(8);
    var Op = imce.ops[name] = {div: imce.el('op-content-'+ name), li: imce.el('op-item-'+ name)};
    Op.a = Op.li.firstChild;
    Op.title = Op.a.innerHTML;
    $(Op.a).click(function() {imce.opClick(name); return false;});
  });
},

//convert upload form to an op.
setUploadOp: function () {
  var form = imce.el('imce-upload-form');
  if (!form) return;
  $(form).ajaxForm(imce.uploadSettings()).find('fieldset').each(function() {//clean up fieldsets
    this.removeChild(this.firstChild);
    $(this).after(this.childNodes);
  }).remove();
  imce.opAdd({name: 'upload', title: Drupal.t('Upload'), content: form});//add op
},

//convert fileop form submit buttons to ops.
setFileOps: function () {
  var form = imce.el('imce-fileop-form');
  if (!form) return;
  $(form.elements.filenames).parent().remove();
  $(form).find('fieldset').each(function() {//remove fieldsets
    var $sbmt = $('input:submit', this);
    if (!$sbmt.size()) return;
    var Op = {name: $sbmt.attr('id').substr(5)};
    var func = function() {imce.fopSubmit(Op.name); return false;};
    $sbmt.click(func);
    Op.title = $(this).children('legend').remove().text() || $sbmt.val();
    Op.name == 'delete' ? (Op.func = func) : (Op.content = this.childNodes);
    imce.opAdd(Op);
  }).remove();
  imce.vars.opform = $(form).serialize();//serialize remaining parts.
},

//refresh ops states. enable/disable
refreshOps: function() {
  for (var p in imce.conf.perm) {
    if (imce.conf.perm[p]) imce.opEnable(p);
    else imce.opDisable(p);
  }
},

//add a new file operation
opAdd: function (op) {
  var oplist = imce.el('ops-list'), opcons = imce.el('op-contents');
  var name = op.name || ('op-'+ $(oplist).children('li').size());
  var title = op.title || 'Untitled';
  var Op = imce.ops[name] = {title: title};
  if (op.content) {
    Op.div = imce.newEl('div');
    $(Op.div).attr({id: 'op-content-'+ name, 'class': 'op-content'}).appendTo(opcons).append(op.content);
  }
  Op.a = imce.newEl('a');
  Op.li = imce.newEl('li');
  $(Op.a).attr({href: '#', name: name, title: title}).html('<span>' + title +'</span>').click(imce.opClickEvent);
  $(Op.li).attr('id', 'op-item-'+ name).append(Op.a).appendTo(oplist);
  Op.func = op.func || imce.opVoid;
  return Op;
},

//click event for file operations
opClickEvent: function(e) {
  imce.opClick(this.name);
  return false;
},

//void operation function
opVoid: function() {},

//perform op click
opClick: function(name) {
  var Op = imce.ops[name], oldop = imce.vars.op;
  if (!Op || Op.disabled) {
    return imce.setMessage(Drupal.t('You can not perform this operation.'), 'error');
  }
  if (Op.div) {
    if (oldop) {
      var toggle = oldop == name;
      imce.opShrink(oldop, toggle ? 'fadeOut' : 'hide');
      if (toggle) return false;
    }
    var left = Op.li.offsetLeft;
    var $opcon = $('#op-contents').css({left: 0});
    $(Op.div).fadeIn('normal', function() {
      setTimeout(function() {
        if (imce.vars.op) {
          var $inputs = $('input', imce.ops[imce.vars.op].div);
          $inputs.eq(0).focus();
          //form inputs become invisible in IE. Solution is as stupid as the behavior.
          $('html').is('.ie') && $inputs.addClass('dummyie').removeClass('dummyie');
       }
      });
    });
    var diff = left + $opcon.width() - $('#imce-content').width();
    $opcon.css({left: diff > 0 ? left - diff - 1 : left});
    $(Op.li).addClass('active');
    $(imce.opCloseLink).fadeIn(300);
    imce.vars.op = name;
  }
  Op.func(true);
  return true;
},

//enable a file operation
opEnable: function(name) {
  var Op = imce.ops[name];
  if (Op && Op.disabled) {
    Op.disabled = false;
    $(Op.li).show();
  }
},

//disable a file operation
opDisable: function(name) {
  var Op = imce.ops[name];
  if (Op && !Op.disabled) {
    Op.div && imce.opShrink(name);
    $(Op.li).hide();
    Op.disabled = true;
  }
},

//hide contents of a file operation
opShrink: function(name, effect) {
  if (imce.vars.op != name) return;
  var Op = imce.ops[name];
  $(Op.div).stop(true, true)[effect || 'hide']();
  $(Op.li).removeClass('active');
  $(imce.opCloseLink).hide();
  Op.func(false);
  imce.vars.op = null;
},

//navigate to dir
navigate: function(dir) {
  if (imce.vars.navbusy || (dir == imce.conf.dir && !confirm(Drupal.t('Do you want to refresh the current directory?')))) return;
  var cache = imce.vars.cache && dir != imce.conf.dir;
  var set = imce.navSet(dir, cache);
  if (cache && imce.cache[dir]) {//load from the cache
    set.success({data: imce.cache[dir]});
    set.complete();
  }
  else $.ajax(set);//live load
},
//ajax navigation settings
navSet: function (dir, cache) {
  $(imce.tree[dir].li).addClass('loading');
  imce.vars.navbusy = dir;
  return {url: imce.ajaxURL('navigate', dir),
  type: 'GET',
  dataType: 'json',
  success: function(response) {
    if (response.data && !response.data.error) {
      if (cache) imce.navCache(imce.conf.dir, dir);//cache the current dir
      imce.navUpdate(response.data, dir);
    }
    imce.processResponse(response);
  },
  complete: function () {
    $(imce.tree[dir].li).removeClass('loading');
    imce.vars.navbusy = null;
  }
  };
},

//update directory using the given data
navUpdate: function(data, dir) {
  var cached = data == imce.cache[dir], olddir = imce.conf.dir;
  if (cached) data.files.id = 'file-list';
  $(imce.FLW).html(data.files);
  imce.dirActivate(dir);
  imce.dirSubdirs(dir, data.subdirectories);
  $.extend(imce.conf.perm, data.perm);
  imce.refreshOps();
  imce.initiateList(cached);
  imce.setPreview(imce.selcount == 1 ? imce.lastFid() : null);
  imce.SBW.scrollTop = 0;
  imce.invoke('navigate', data, olddir, cached);
},

//set cache
navCache: function (dir, newdir) {
  var C = imce.cache[dir] = {'dir': dir, files: imce.el('file-list'), dirsize: imce.el('dir-size').innerHTML, perm: $.extend({}, imce.conf.perm)};
  C.files.id = 'cached-list-'+ dir;
  imce.FW.appendChild(C.files);
  imce.invoke('cache', C, newdir);
},

//validate upload form
uploadValidate: function (data, form, options) {
  var path = data[0].value;
  if (!path) return false;
  if (imce.conf.extensions != '*') {
    var ext = path.substr(path.lastIndexOf('.') + 1);
    if ((' '+ imce.conf.extensions +' ').indexOf(' '+ ext.toLowerCase() +' ') == -1) {
      return imce.setMessage(Drupal.t('Only files with the following extensions are allowed: %files-allowed.', {'%files-allowed': imce.conf.extensions}), 'error');
    }
  }
  var sep = path.indexOf('/') == -1 ? '\\' : '/';
  options.url = imce.ajaxURL('upload');//make url contain current dir.
  imce.fopLoading('upload', true);
  return true;
},

//settings for upload
uploadSettings: function () {
  return {beforeSubmit: imce.uploadValidate, success: function (response) {imce.processResponse($.parseJSON(response));}, complete: function () {imce.fopLoading('upload', false);}, resetForm: true};
},

//validate default ops(delete, thumb, resize)
fopValidate: function(fop) {
  if (!imce.validateSelCount(1, imce.conf.filenum)) return false;
  switch (fop) {
    case 'delete':
      return confirm(Drupal.t('Delete selected files?'));
    case 'thumb':
      if (!$('input:checked', imce.ops['thumb'].div).size()) {
        return imce.setMessage(Drupal.t('Please select a thumbnail.'), 'error');
      }
      return imce.validateImage();
    case 'resize':
      var w = imce.el('edit-width').value, h = imce.el('edit-height').value;
      var maxDim = imce.conf.dimensions.split('x');
      var maxW = maxDim[0]*1, maxH = maxW ? maxDim[1]*1 : 0;
      if (!(/^[1-9][0-9]*$/).test(w) || !(/^[1-9][0-9]*$/).test(h) || (maxW && (maxW < w*1 || maxH < h*1))) {
        return imce.setMessage(Drupal.t('Please specify dimensions within the allowed range that is from 1x1 to @dimensions.', {'@dimensions': maxW ? imce.conf.dimensions : Drupal.t('unlimited')}), 'error');
      }
      return imce.validateImage();
  }

  var func = fop +'OpValidate';
  if (imce[func]) return imce[func](fop);
  return true;
},

//submit wrapper for default ops
fopSubmit: function(fop) {
  switch (fop) {
    case 'thumb': case 'delete': case 'resize':  return imce.commonSubmit(fop);
  }
  var func = fop +'OpSubmit';
  if (imce[func]) return imce[func](fop);
},

//common submit function shared by default ops
commonSubmit: function(fop) {
  if (!imce.fopValidate(fop)) return false;
  imce.fopLoading(fop, true);
  $.ajax(imce.fopSettings(fop));
},

//settings for default file operations
fopSettings: function (fop) {
  return {url: imce.ajaxURL(fop), type: 'POST', dataType: 'json', success: imce.processResponse, complete: function (response) {imce.fopLoading(fop, false);}, data: imce.vars.opform +'&filenames='+ imce.serialNames() +'&jsop='+ fop + (imce.ops[fop].div ? '&'+ $('input, select, textarea', imce.ops[fop].div).serialize() : '')};
},

//toggle loading state
fopLoading: function(fop, state) {
  var el = imce.el('edit-'+ fop), func = state ? 'addClass' : 'removeClass'
  if (el) {
    $(el)[func]('loading').attr('disabled', state);
  }
  else {
    $(imce.ops[fop].li)[func]('loading');
    imce.ops[fop].disabled = state;
  }
},

//preview a file.
setPreview: function (fid) {
  var row, html = '';
  imce.vars.prvfid = fid;
  if (fid && (row = imce.fids[fid])) {
    var width = row.cells[2].innerHTML * 1;
    html = imce.vars.previewImages && width ? imce.imgHtml(fid, width, row.cells[3].innerHTML) : imce.decodePlain(fid);
    html = '<a href="#" onclick="imce.send(\''+ fid +'\'); return false;" title="'+ (imce.vars.prvtitle||'') +'">'+ html +'</a>';
  }
  imce.el('file-preview').innerHTML = html;
},

//default file send function. sends the file to the new window.
send: function (fid) {
  fid && window.open(imce.getURL(fid));
},

//add an operation for an external application to which the files are send.
setSendTo: function (title, func) {
  imce.send = function (fid) { fid && func(imce.fileGet(fid), window);};
  var opFunc = function () {
    if (imce.selcount != 1) return imce.setMessage(Drupal.t('Please select a file.'), 'error');
    imce.send(imce.vars.prvfid);
  };
  imce.vars.prvtitle = title;
  return imce.opAdd({name: 'sendto', title: title, func: opFunc});
},

//move initial page messages into log
prepareMsgs: function () {
  var msgs;
  if (msgs = imce.el('imce-messages')) {
    $('>div', msgs).each(function (){
      var type = this.className.split(' ')[1];
      var li = $('>ul li', this);
      if (li.size()) li.each(function () {imce.setMessage(this.innerHTML, type);});
      else imce.setMessage(this.innerHTML, type);
    });
    $(msgs).remove();
  }
},

//insert log message
setMessage: function (msg, type) {
  var $box = $(imce.msgBox);
  var logs = imce.el('log-messages') || $(imce.newEl('div')).appendTo('#help-box-content').before('<h4>'+ Drupal.t('Log messages') +':</h4>').attr('id', 'log-messages')[0];
  var msg = '<div class="message '+ (type || 'status') +'">'+ msg +'</div>';
  $box.queue(function() {
    $box.css({opacity: 0, display: 'block'}).html(msg);
    $box.dequeue();
  });
  var q = $box.queue().length, t = imce.vars.msgT || 1000;
  q = q < 2 ? 1 : q < 3 ? 0.8 : q < 4 ? 0.7 : 0.4;//adjust speed with respect to queue length
  $box.fadeTo(600 * q, 1).fadeTo(t * q, 1).fadeOut(400 * q);
  $(logs).append(msg);
  return false;
},

//invoke hooks
invoke: function (hook) {
  var i, args, func, funcs;
  if ((funcs = imce.hooks[hook]) && funcs.length) {
    (args = $.makeArray(arguments)).shift();
    for (i = 0; func = funcs[i]; i++) func.apply(this, args);
  }
},

//process response
processResponse: function (response) {
  if (response.data) imce.resData(response.data);
  if (response.messages) imce.resMsgs(response.messages);
},

//process response data
resData: function (data) {
  var i, added, removed;
  if (added = data.added) {
    var cnt = imce.findex.length;
    for (i in added) {//add new files or update existing
      imce.fileAdd(added[i]);
    }
    if (added.length == 1) {//if it is a single file operation
      imce.highlight(added[0].name);//highlight
    }
    if (imce.findex.length != cnt) {//if new files added, scroll to bottom.
      $(imce.SBW).animate({scrollTop: imce.SBW.scrollHeight}).focus();
    }
  }
  if (removed = data.removed) for (i in removed) {
    imce.fileRemove(removed[i]);
  }
  imce.conf.dirsize = data.dirsize;
  imce.updateStat();
},

//set response messages
resMsgs: function (msgs) {
  for (var type in msgs) for (var i in msgs[type]) {
    imce.setMessage(msgs[type][i], type);
  }
},

//return img markup
imgHtml: function (fid, width, height) {
  return '<img src="'+ imce.getURL(fid) +'" width="'+ width +'" height="'+ height +'" alt="'+ imce.decodePlain(fid) +'">';
},

//check if the file is an image
isImage: function (fid) {
  return imce.fids[fid].cells[2].innerHTML * 1;
},

//find the first non-image in the selection
getNonImage: function (selected) {
  for (var fid in selected) {
    if (!imce.isImage(fid)) return fid;
  }
  return false;
},

//validate current selection for images
validateImage: function () {
  var nonImg = imce.getNonImage(imce.selected);
  return nonImg ? imce.setMessage(Drupal.t('%filename is not an image.', {'%filename': imce.decode(nonImg)}), 'error') : true;
},

//validate number of selected files
validateSelCount: function (Min, Max) {
  if (Min && imce.selcount < Min) {
    return imce.setMessage(Min == 1 ? Drupal.t('Please select a file.') : Drupal.t('You must select at least %num files.', {'%num': Min}), 'error');
  }
  if (Max && Max < imce.selcount) {
    return imce.setMessage(Drupal.t('You are not allowed to operate on more than %num files.', {'%num': Max}), 'error');
  }
  return true;
},

//update file count and dir size
updateStat: function () {
  imce.el('file-count').innerHTML = imce.findex.length;
  imce.el('dir-size').innerHTML = imce.conf.dirsize;
},

//serialize selected files. return fids with a colon between them
serialNames: function () {
  var str = '';
  for (var fid in imce.selected) {
    str += ':'+ fid;
  }
  return str.substr(1);
},

//get file url. re-encode & and # for mod rewrite
getURL: function (fid) {
  var path = (imce.conf.dir == '.' ? '' : imce.conf.dir +'/') + fid;
  return imce.conf.furl + (imce.conf.modfix ? path.replace(/%(23|26)/g, '%25$1') : path);
},

//el. by id
el: function (id) {
  return document.getElementById(id);
},

//find the latest selected fid
lastFid: function () {
  if (imce.vars.lastfid) return imce.vars.lastfid;
  for (var fid in imce.selected);
  return fid;
},

//create ajax url
ajaxURL: function (op, dir) {
  return imce.conf.url + (imce.conf.clean ? '?' :'&') +'jsop='+ op +'&dir='+ (dir||imce.conf.dir);
},

//fast class check
hasC: function (el, name) {
  return el.className && (' '+ el.className +' ').indexOf(' '+ name +' ') != -1;
},

//highlight a single file
highlight: function (fid) {
  if (imce.vars.prvfid) imce.fileClick(imce.vars.prvfid);
  imce.fileClick(fid);
},

//process a row
processRow: function (row) {
  row.cells[0].innerHTML = '<span>' + imce.decodePlain(row.id) + '</span>';
  row.onmousedown = function(e) {
    var e = e||window.event;
    imce.fileClick(this, e.ctrlKey, e.shiftKey);
    return !(e.ctrlKey || e.shiftKey);
  };
  row.ondblclick = function(e) {
    imce.send(this.id);
    return false;
  };
},

//decode urls. uses unescape. can be overridden to use decodeURIComponent
decode: function (str) {
  return unescape(str);
},

//decode and convert to plain text
decodePlain: function (str) {
  return Drupal.checkPlain(imce.decode(str));
},

//global ajax error function
ajaxError: function (e, response, settings, thrown) {
  imce.setMessage(Drupal.ajaxError(response, settings.url).replace(/\n/g, '<br />'), 'error');
},

//convert button elements to standard input buttons
convertButtons: function(form) {
  $('button:submit', form).each(function(){
    $(this).replaceWith('<input type="submit" value="'+ $(this).text() +'" name="'+ this.name +'" class="form-submit" id="'+ this.id +'" />');
  });
},

//create element
newEl: function(name) {
  return document.createElement(name);
},

//scroll syncronization for section headers
syncScroll: function(scrlEl, fixEl, bottom) {
  var $fixEl = $(fixEl);
  var prop = bottom ? 'bottom' : 'top';
  var factor = bottom ? -1 : 1;
  var syncScrl = function(el) {
    $fixEl.css(prop, factor * el.scrollTop);
  }
  $(scrlEl).scroll(function() {
    var el = this;
    syncScrl(el);
    setTimeout(function() {
      syncScrl(el);
    });
  });
},

//get UI ready. provide backward compatibility.
updateUI: function() {
  //file urls.
  var furl = imce.conf.furl, isabs = furl.indexOf('://') > -1;
  var absurls = imce.conf.absurls = imce.vars.absurls || imce.conf.absurls;
  var host = location.host;
  var baseurl = location.protocol + '//' + host;
  if (furl.charAt(furl.length - 1) != '/') {
    furl = imce.conf.furl = furl + '/';
  }
  imce.conf.modfix = imce.conf.clean && furl.indexOf(host + '/system/') > -1;
  if (absurls && !isabs) {
    imce.conf.furl = baseurl + furl;
  }
  else if (!absurls && isabs && furl.indexOf(baseurl) == 0) {
    imce.conf.furl = furl.substr(baseurl.length);
  }
  //convert button elements to input elements.
  imce.convertButtons(imce.FW);
  //ops-list
  $('#ops-list').removeClass('tabs secondary').addClass('clear-block clearfix');
  imce.opCloseLink = $(imce.newEl('a')).attr({id: 'op-close-link', href: '#', title: Drupal.t('Close')}).click(function() {
    imce.vars.op && imce.opClick(imce.vars.op);
    return false;
  }).appendTo('#op-contents')[0];
  //navigation-header
  if (!$('#navigation-header').size()) {
    $(imce.NW).children('.navigation-text').attr('id', 'navigation-header').wrapInner('<span></span>');
  }
  //log
  $('#log-prv-wrapper').before($('#log-prv-wrapper > #preview-wrapper')).remove();
  $('#log-clearer').remove();
  //content resizer
  $('#content-resizer').remove();
  //message-box
  imce.msgBox = imce.el('message-box') || $(imce.newEl('div')).attr('id', 'message-box').prependTo('#imce-content')[0];
  //create help tab
  var $hbox = $('#help-box');
  $hbox.is('a') && $hbox.replaceWith($(imce.newEl('div')).attr('id', 'help-box').append($hbox.children()));
  imce.hooks.load.push(function() {
    imce.opAdd({name: 'help', title: $('#help-box-title').remove().text(), content: $('#help-box').show()});
  });
  //add ie classes
  $.browser.msie && $('html').addClass('ie') && parseFloat($.browser.version) < 8 && $('html').addClass('ie-7');
  // enable box view for file list
  imce.vars.boxW && imce.boxView();
  //scrolling file list
  imce.syncScroll(imce.SBW, '#file-header-wrapper');
  imce.syncScroll(imce.SBW, '#dir-stat', true);
  //scrolling directory tree
  imce.syncScroll(imce.NW, '#navigation-header');
}

};

//initiate
$(document).ready(imce.initiate).ajaxError(imce.ajaxError);

})(jQuery);;
//This pack implemets: keyboard shortcuts, file sorting, resize bars, and inline thumbnail preview.

(function($) {

// add scale calculator for resizing.
imce.hooks.load.push(function () {
  $('#edit-width, #edit-height').focus(function () {
    var fid, r, w, isW, val;
    if (fid = imce.vars.prvfid) {
      isW = this.id == 'edit-width', val =  imce.el(isW ? 'edit-height' : 'edit-width').value*1;
      if (val && (w = imce.isImage(fid)) && (r = imce.fids[fid].cells[3].innerHTML*1 / w))
        this.value = Math.round(isW ? val/r : val*r);
    }
  });
});

// Shortcuts
var F = null;
imce.initiateShortcuts = function () {
  $(imce.NW).attr('tabindex', '0').keydown(function (e) {
    if (F = imce.dirKeys['k'+ e.keyCode]) return F(e);
  });
  $(imce.FLW).attr('tabindex', '0').keydown(function (e) {
    if (F = imce.fileKeys['k'+ e.keyCode]) return F(e);
  }).focus();
};

//shortcut key-function pairs for directories
imce.dirKeys = {
  k35: function (e) {//end-home. select first or last dir
    var L = imce.tree['.'].li;
    if (e.keyCode == 35) while (imce.hasC(L, 'expanded')) L = L.lastChild.lastChild;
    $(L.childNodes[1]).click().focus();
  },
  k37: function (e) {//left-right. collapse-expand directories.(right may also move focus on files)
    var L, B = imce.tree[imce.conf.dir], right = e.keyCode == 39;
    if (B.ul && (right ^ imce.hasC(L = B.li, 'expanded')) ) $(L.firstChild).click();
    else if (right) $(imce.FLW).focus();
  },
  k38: function (e) {//up. select the previous directory
    var B = imce.tree[imce.conf.dir];
    if (L = B.li.previousSibling) {
      while (imce.hasC(L, 'expanded')) L = L.lastChild.lastChild;
      $(L.childNodes[1]).click().focus();
    }
    else if ((L = B.li.parentNode.parentNode) && L.tagName == 'LI') $(L.childNodes[1]).click().focus();
  },
  k40: function (e) {//down. select the next directory
    var B = imce.tree[imce.conf.dir], L = B.li, U = B.ul;
    if (U && imce.hasC(L, 'expanded')) $(U.firstChild.childNodes[1]).click().focus();
    else do {if (L.nextSibling) return $(L.nextSibling.childNodes[1]).click().focus();
    }while ((L = L.parentNode.parentNode).tagName == 'LI');
  }
};
//add equal keys
imce.dirKeys.k36 = imce.dirKeys.k35;
imce.dirKeys.k39 = imce.dirKeys.k37;

//shortcut key-function pairs for files
imce.fileKeys = {
  k38: function (e) {//up-down. select previous-next row
    var fid = imce.lastFid(), i = fid ? imce.fids[fid].rowIndex+e.keyCode-39 : 0;
    imce.fileClick(imce.findex[i], e.ctrlKey, e.shiftKey);
  },
  k35: function (e) {//end-home. select first or last row
    imce.fileClick(imce.findex[e.keyCode == 35 ? imce.findex.length-1 : 0], e.ctrlKey, e.shiftKey);
  },
  k13: function (e) {//enter-insert. send file to external app.
    imce.send(imce.vars.prvfid);
    return false;
  },
  k37: function (e) {//left. focus on directories
    $(imce.tree[imce.conf.dir].a).focus();
  },
  k65: function (e) {//ctrl+A to select all
    if (e.ctrlKey && imce.findex.length) {
      var fid = imce.findex[0].id;
      imce.selected[fid] ? (imce.vars.lastfid = fid) : imce.fileClick(fid);//select first row
      imce.fileClick(imce.findex[imce.findex.length-1], false, true);//shift+click last row
      return false;
    }
  }
};
//add equal keys
imce.fileKeys.k40 = imce.fileKeys.k38;
imce.fileKeys.k36 = imce.fileKeys.k35;
imce.fileKeys.k45 = imce.fileKeys.k13;
//add default operation keys. delete, R(esize), T(humbnails), U(pload)
$.each({k46: 'delete', k82: 'resize', k84: 'thumb', k85: 'upload'}, function (k, op) {
  imce.fileKeys[k] = function (e) {
    if (imce.ops[op] && !imce.ops[op].disabled) imce.opClick(op);
  };
});

//prepare column sorting
imce.initiateSorting = function() {
  //add cache hook. cache the old directory's sort settings before the new one replaces it.
  imce.hooks.cache.push(function (cache, newdir) {
    cache.cid = imce.vars.cid, cache.dsc = imce.vars.dsc;
  });
  //add navigation hook. refresh sorting after the new directory content is loaded.
  imce.hooks.navigate.push(function (data, olddir, cached) {
    cached ? imce.updateSortState(data.cid, data.dsc) : imce.firstSort();
  });
  imce.vars.cid = imce.cookie('imcecid') * 1;
  imce.vars.dsc = imce.cookie('imcedsc') * 1;
  imce.cols = imce.el('file-header').rows[0].cells;
  $(imce.cols).click(function () {imce.columnSort(this.cellIndex, imce.hasC(this, 'asc'));});
  imce.firstSort();
};

//sort the list for the first time
imce.firstSort = function() {
  imce.columnSort(imce.vars.cid, imce.vars.dsc);
};

//sort file list according to column index.
imce.columnSort = function(cid, dsc) {
  if (imce.findex.length < 2) return;
  if (cid == imce.vars.cid && dsc != imce.vars.dsc) {
    imce.findex.reverse();
  }
  else {
    var func = 'sort'+ (cid == 0 ? 'Str' : 'Num') + (dsc ? 'Dsc' : 'Asc');
    var prop = cid == 2 || cid == 3 ? 'innerHTML' : 'id';
    //sort rows
    imce.findex.sort(cid ? function(r1, r2) {return imce[func](r1.cells[cid][prop], r2.cells[cid][prop])} : function(r1, r2) {return imce[func](r1.id, r2.id)});
  }
  //insert sorted rows
  for (var row, i=0; row = imce.findex[i]; i++) {
    imce.tbody.appendChild(row);
  }
  imce.updateSortState(cid, dsc);
};

//update column states
imce.updateSortState = function(cid, dsc) {
  $(imce.cols[imce.vars.cid]).removeClass(imce.vars.dsc ? 'desc' : 'asc');
  $(imce.cols[cid]).addClass(dsc ? 'desc' : 'asc');
  imce.vars.cid != cid && imce.cookie('imcecid', imce.vars.cid = cid);
  imce.vars.dsc != dsc && imce.cookie('imcedsc', (imce.vars.dsc = dsc) ? 1 : 0);
};

//sorters
imce.sortStrAsc = function(a, b) {return a.toLowerCase() < b.toLowerCase() ? -1 : 1;};
imce.sortStrDsc = function(a, b) {return imce.sortStrAsc(b, a);};
imce.sortNumAsc = function(a, b) {return a-b;};
imce.sortNumDsc = function(a, b) {return b-a};

//set resizers for resizable areas and recall previous dimensions
imce.initiateResizeBars = function () {
  imce.setResizer('#navigation-resizer', 'X', imce.NW, null, 1, function(p1, p2, m) {
    p1 != p2 && imce.cookie('imcenww', p2);
  });
  imce.setResizer('#browse-resizer', 'Y', imce.BW, imce.PW, 50, function(p1, p2, m) {
    p1 != p2 && imce.cookie('imcebwh', p2);
  });
  imce.recallDimensions();
};

//set a resize bar
imce.setResizer = function (resizer, axis, area1, area2, Min, callback) {
  var opt = axis == 'X' ? {pos: 'pageX', func: 'width'} : {pos: 'pageY', func: 'height'};
  var Min = Min || 0;
  var $area1 = $(area1), $area2 = area2 ? $(area2) : null, $doc = $(document);
  $(resizer).mousedown(function(e) {
    var pos = e[opt.pos];
    var end = start = $area1[opt.func]();
    var Max = $area2 ? start + $area2[opt.func]() : 1200;
    var drag = function(e) {
      end = Math.min(Max - Min, Math.max(start + e[opt.pos] - pos, Min));
      $area1[opt.func](end);
      $area2 && $area2[opt.func](Max - end);
      return false;
    };
    var undrag = function(e) {
      $doc.unbind('mousemove', drag).unbind('mouseup', undrag);
      callback && callback(start, end, Max);
    };
    $doc.mousemove(drag).mouseup(undrag);
    return false;
  });
};

//get&set area dimensions of the last session from the cookie
imce.recallDimensions = function() {
  var $body = $(document.body);
  if (!$body.is('.imce')) return;
  //row heights
  imce.recallHeights(imce.cookie('imcebwh') * 1);
  $(window).resize(function(){imce.recallHeights()});
  //navigation wrapper
  var nwOldWidth = imce.cookie('imcenww') * 1;
  nwOldWidth && $(imce.NW).width(Math.min(nwOldWidth, $body.width() - 10));
};

//set row heights with respect to window height
imce.recallHeights = function(bwFixedHeight) {
  //window & body dimensions
  var winHeight = $.browser.opera ? window.innerHeight : $(window).height();
  var bodyHeight = $(document.body).outerHeight(true);
  var diff = winHeight - bodyHeight;
  var bwHeight = $(imce.BW).height(), pwHeight = $(imce.PW).height();
  if (bwFixedHeight) {
    //row heights
    diff -= bwFixedHeight - bwHeight;
    bwHeight = bwFixedHeight;
    pwHeight += diff;
  }
  else {
    diff = parseInt(diff/2);
    bwHeight += diff;
    pwHeight += diff;
  }
  $(imce.BW).height(bwHeight);
  $(imce.PW).height(pwHeight);
};

//cookie get & set
imce.cookie = function (name, value) {
  if (typeof(value) == 'undefined') {//get
    return unescape((document.cookie.match(new RegExp('(^|;) *'+ name +'=([^;]*)(;|$)')) || ['', '', ''])[2]);
  }
  document.cookie = name +'='+ escape(value) +'; expires='+ (new Date(new Date() * 1 + 15 * 86400000)).toGMTString() +'; path=' + Drupal.settings.basePath + 'imce';//set
};

//view thumbnails(smaller than tMaxW x tMaxH) inside the rows.
//Large images can also be previewed by setting imce.vars.prvstyle to a valid image style(imagecache preset)
imce.thumbRow = function (row) {
  var w = row.cells[2].innerHTML * 1;
  if (!w) return;
  var h = row.cells[3].innerHTML * 1;
  if (imce.vars.tMaxW < w || imce.vars.tMaxH < h) {
    if (!imce.vars.prvstyle || imce.conf.dir.indexOf('styles') == 0) return;
    var img = new Image();
    img.src = imce.imagestyleURL(imce.getURL(row.id), imce.vars.prvstyle);
    img.className = 'imagestyle-' + imce.vars.prvstyle;
  }
  else {
    var prvH = h, prvW = w;
    if (imce.vars.prvW < w || imce.vars.prvH < h) {
      if (h < w) {
        prvW = imce.vars.prvW;
        prvH = prvW*h/w;
      }
      else {
        prvH = imce.vars.prvH;
        prvW = prvH*w/h;
      }
    }
    var img = new Image(prvW, prvH);
    img.src = imce.getURL(row.id);
  }
  var cell = row.cells[0];
  cell.insertBefore(img, cell.firstChild);
};

//convert a file URL returned by imce.getURL() to an image style(imagecache preset) URL
imce.imagestyleURL = function (url, stylename) {
  var len = imce.conf.furl.length - 1;
  return url.substr(0, len) + '/styles/' + stylename + '/' + imce.conf.scheme + url.substr(len);
};

// replace table view with box view for file list
imce.boxView = function () {
  var w = imce.vars.boxW, h = imce.vars.boxH;
  if (!w || !h || $.browser.msie && parseFloat($.browser.version) < 8) return;
  var $body = $(document.body);
  var toggle = function() {
    $body.toggleClass('box-view');
    // refresh dom. required by all except FF.
    !$.browser.mozilla && $('#file-list').appendTo(imce.FW).appendTo(imce.FLW);
  };
  $body.append('<style type="text/css">.box-view #file-list td.name {width: ' + w + 'px;height: ' + h + 'px;} .box-view #file-list td.name span {width: ' + w + 'px;word-wrap: normal;text-overflow: ellipsis;}</style>');
  imce.hooks.load.push(function() {
    toggle();
    imce.SBW.scrollTop = 0;
    imce.opAdd({name: 'changeview', title: Drupal.t('Change view'), func: toggle});
  });
  imce.hooks.list.push(imce.boxViewRow);
};

// process a row for box view. include all data in box title.
imce.boxViewRow = function (row) {
  var s = ' | ', w = row.cells[2].innerHTML * 1, dim = w ? s + w + 'x' + row.cells[3].innerHTML * 1 : '';
  row.cells[0].title = imce.decode(row.id) + s + row.cells[1].innerHTML + (dim) + s + row.cells[4].innerHTML;
};

})(jQuery);;
/*
 * IMCE Integration by URL
 * Ex-1: http://example.com/imce?app=XEditor|url@urlFieldId|width@widthFieldId|height@heightFieldId
 * Creates "Insert file" operation tab, which fills the specified fields with url, width, height properties
 * of the selected file in the parent window
 * Ex-2: http://example.com/imce?app=XEditor|sendto@functionName
 * "Insert file" operation calls parent window's functionName(file, imceWindow)
 * Ex-3: http://example.com/imce?app=XEditor|imceload@functionName
 * Parent window's functionName(imceWindow) is called as soon as IMCE UI is ready. Send to operation
 * needs to be set manually. See imce.setSendTo() method in imce.js
 */

(function($) {

var appFields = {}, appWindow = (top.appiFrm||window).opener || parent;

// Execute when imce loads.
imce.hooks.load.push(function(win) {
  var index = location.href.lastIndexOf('app=');
  if (index == -1) return;
  var data = decodeURIComponent(location.href.substr(index + 4)).split('|');
  var arr, prop, str, func, appName = data.shift();
  // Extract fields
  for (var i = 0, len = data.length; i < len; i++) {
    str = data[i];
    if (!str.length) continue;
    if (str.indexOf('&') != -1) str = str.split('&')[0];
    arr = str.split('@');
    if (arr.length > 1) {
      prop = arr.shift();
      appFields[prop] = arr.join('@');
    }
  }
  // Run custom onload function if available
  if (appFields.imceload && (func = isFunc(appFields.imceload))) {
    func(win);
    delete appFields.imceload;
  }
  // Set custom sendto function. appFinish is the default.
  var sendtoFunc = appFields.url ? appFinish : false;
  //check sendto@funcName syntax in URL
  if (appFields.sendto && (func = isFunc(appFields.sendto))) {
    sendtoFunc = func;
    delete appFields.sendto;
  }
  // Check old method windowname+ImceFinish.
  else if (win.name && (func = isFunc(win.name +'ImceFinish'))) {
    sendtoFunc = func;
  }
  // Highlight file
  if (appFields.url) {
    // Support multiple url fields url@field1,field2..
    if (appFields.url.indexOf(',') > -1) {
      var arr = appFields.url.split(',');
      for (var i in arr) {
        if ($('#'+ arr[i], appWindow.document).size()) {
          appFields.url = arr[i];
          break;
        }
      }
    }
    var filename = $('#'+ appFields.url, appWindow.document).val() || '';
    imce.highlight(filename.substr(filename.lastIndexOf('/')+1));
  }
  // Set send to
  sendtoFunc && imce.setSendTo(Drupal.t('Insert file'), sendtoFunc);
});

// Default sendTo function
var appFinish = function(file, win) {
  var $doc = $(appWindow.document);
  for (var i in appFields) {
    $doc.find('#'+ appFields[i]).val(file[i]);
  }
  if (appFields.url) {
    try{
      $doc.find('#'+ appFields.url).blur().change().focus();
    }catch(e){
      try{
        $doc.find('#'+ appFields.url).trigger('onblur').trigger('onchange').trigger('onfocus');//inline events for IE
      }catch(e){}
    }
  }
  appWindow.focus();
  win.close();
};

// Checks if a string is a function name in the given scope.
// Returns function reference. Supports x.y.z notation.
var isFunc = function(str, scope) {
  var obj = scope || appWindow;
  var parts = str.split('.'), len = parts.length;
  for (var i = 0; i < len && (obj = obj[parts[i]]); i++);
  return obj && i == len && (typeof obj == 'function' || typeof obj != 'string' && !obj.nodeName && obj.constructor != Array && /^[\s[]?function/.test(obj.toString())) ? obj : false;
}

})(jQuery);;
