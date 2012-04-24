CSS3PIE is a very simple Drupal module to implement the css3pie.com javascript functionality 
to your Drupal and make the css selectors configurable over user interface. This module creates 
a real css file on Drupal's files folder and adds them via drupal_add_css.

Requirements:
--------------
Modules: ctools and libraries
3rd party libraries: Latest version of PIE library from http://css3pie.com

Installation:
--------------
Donwload the module and extract it to the modules directory.
Download the PIE Library from http://css3pie.com and place it to /sites/all/libraries/PIE.

Configuration:
--------------
Go to admin/config/user-interface/css3pie and configure as you want. In the textarea use one line for every
selector (don't use a comma).
If you have problems with the file mimetype on .htc files you can set the php wrapper option
to yes and the file comes with a own mimetype header.

The CSS File will be rebuilt if you save the options.

NOTICE:
You don't need to load the PIE.htc file manually in your themes css file. This module will do the hooking of PIE.htc automatically.

In the CSS of your theme you can now use CSS3-declaration like the following example for rounded corners:

#id, .class {
  position:relative;
  z-index: 999;
  border-radius: 8px;
  -opera-border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
}

Implement hook_css3pie() in your own module:
--------------
You can use the hook_css3pie() in your own module to provide an array with selectors
that you are using.

  Example:
  --------
  hook_css3pie() {
    return array('yourmodulename' => array(
      '.class1', '.class2', '.class3',
    ));
  }