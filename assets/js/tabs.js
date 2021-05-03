/**
 * Tabs.
 */
$ = jQuery;$('.tab').click(function(){tabId = $(this).attr('data-tab');$(this).parents('.tabsgroup').find('.tab').removeClass('is-active');$(this).addClass('is-active');$(this).parents('.tabsgroup').find('.tabcontent').removeClass('is-visible');$(this).parents('.tabsgroup').find('.tabcontent[data-tab="' + tabId +'"]').addClass('is-visible');});$('.tabsgroup').each(function(){$(this).find('.tab').first().click();});var url = document.location.href;var hash = url.substring(url.indexOf("#")+1);$('.tab[data-tab="' + hash + '"]').click();
