function close_all_sub(b){var f="setup,usb,security,green,admin,advanced";var d=f.split(",");for(i=0;i<d.length;i++){var a=d[i]+"_bt";var e=d[i]+"_sub";if(e!=b){var c=top.document.getElementById(a);if(!c){continue}settingClass(c,"advanced_white_close_button");top.document.getElementById(e).style.display="none"}}}function open_or_close_sub(d){var b=d+"_bt";var e=d+"_sub";var c=top.document.getElementById(e).style.display;close_all_sub(e);var a=top.document.getElementById(b);if(c=="none"){settingClass(a,"advanced_white_open_button");top.document.getElementById(e).style.display="";subItemsClass(e);enabledItemsClass()}else{settingClass(a,"advanced_white_close_button");top.document.getElementById(e).style.display="none"}change_menu_height()}function change_menu_height(){var f=document.getElementById("footer");var e=(f.className=="footer_double");var d=document.documentElement.clientHeight-97;var b=document.getElementById("menu").clientHeight>510?document.getElementById("menu").clientHeight:510;var c=navigator.userAgent;if(c.indexOf("MSIE 9.0")>-1){document.getElementById("middle").style.minHeight=e?(b+87)+"px":(d)+"px"}else{if(isIE_or_Opera()&&IE_version()<9){var a=e?document.documentElement.clientHeight-190:document.documentElement.clientHeight-147;b=a>b?a:b;document.getElementById("container").style.height=e?(b+93)+"px":(d)+"px";document.getElementById("middle").style.height=e?(b+87)+"px":(d-9)+"px"}}document.getElementById("middle").style.minHeight=e?(b+87)+"px":(b+45)+"px";if(b>510){document.getElementById("middle").style.minHeight=e?(b+87)+"px":(b+45)+"px"}else{if(isIE()==true){document.getElementById("middle").style.height=e?(b+87)+"px":(d-9)+"px"}else{document.getElementById("middle").style.minHeight=e?(b+87)+"px":(d-5)+"px"}}}function change_size(){setFooterClass();var e=document.getElementById("footer");var c=(e.className=="footer_double");var a=navigator.userAgent;if(a.indexOf("MSIE 9.0")>-1){var b=document.getElementById("menu");b.className="menu_ie9_words"}if(isIE_or_Opera()&&IE_version()<9){var d=document.documentElement.clientWidth-40;document.getElementById("top").style.width=d>820?d:"820px";document.getElementById("container").style.width=d>820?d:"820px";document.getElementById("formframe_div").style.width=d>820?d-195:"625px"}document.getElementById("formframe_div").style.bottom=c?"88px":"45px";change_menu_height()}function settingClass(c,b){var a=c.getElementsByTagName("span")[0].clientHeight;if(a>32){c.className=b+"_triple"}else{if(a>16){c.className=b+"_double"}else{c.className=b}}}function subItemsClass(a){var b;var c;var f;var e,d;for(d=0;d<arguments.length;d++){b=top.document.getElementById(arguments[d]);if(b.style.display=="none"){continue}c=b.getElementsByTagName("dt");for(e=0;e<c.length;e++){if(top.old_div==c[e]){continue}f=c[e].getElementsByTagName("span")[0].clientHeight;if(f>30){c[e].className="long_name"}else{if(f>16){c[e].className="middle_name"}else{c[e].className="sub_back"}}}}}function clickSubMenu(a,d){if(top.old_div!=""){var c=top.old_div.className;if(c=="sub_back_purple"||c=="sub_back_purple_usb"){top.old_div.className="sub_back"}else{if(c=="sub_back_purple_double"||c=="sub_back_purple_usb_double"){top.old_div.className="middle_name"}else{if(c=="sub_back_purple_triple"){top.old_div.className="long_name"}else{if(c=="sub_back_purple_long"){top.old_div.className="long_name"}}}}}if(a=="0"){top.old_div="";return}var b=a.className;if(b=="sub_back"){if(d=="usb_bas"||d=="usb_adv"||d=="media"||d=="userset"){a.className="sub_back_purple_usb"}else{a.className="sub_back_purple"}}else{if(b=="middle_name"){if(d=="usb_bas"||d=="usb_adv"||d=="media"||d=="userset"){a.className="sub_back_purple_usb_double"}else{a.className="sub_back_purple_double"}}else{if(b=="long_name"){a.className="sub_back_purple_triple"}}}if(d=="forwarding_triggering"){var e=a.getElementsByTagName("span")[0].clientHeight;if(e>48){a.className="sub_back_purple_long"}}top.old_div=a}var array_name=["wds_items","ap_items","bridge_items","extender_items","mapt_items","devmode_items"];var enable_flags=["enabled_wds","enable_ap_flag","enable_bridge_flag","enable_extender_flag","enable_mapt","device_mode"];var wds_items=["internet","wan","block_site","block_services","forwarding_triggering","qos","vpn","dns","static","remote","upnp","traffic","wl_bridge","guest","email","schedule","log"];var ap_items=["internet","wan","block_site","block_services","forwarding_triggering","vpn","remote","upnp","traffic","wl_bridge","lan","ipv6","parental","circle_parental","access_control","usb_set","devname"];var extender_items=["internet","wan","block_site","block_services","forwarding_triggering","vpn","remote","upnp","traffic","wl_bridge","lan","ipv6","led","fbwifi"];var bridge_items=["internet","wan","block_site","block_services","forwarding_triggering","qos","vpn","dns","static","remote","upnp","traffic","wireless","guest","lan","parental","access_control","email","schedule","wds","ipv6","wlap"];var mapt_items=["internet"];var devmode_items=["internet","wireless","guest","wan","lan","qos","readyshare_stor","usb_bas","usb_adv","media","print","vault","block_site","block_services","schedule","email","wladv","rae","forwarding_triggering","dns","vpn","static","remote","upnp","traffic","wl_bridge","ipv6","parental","access_control","usb_set","vlan","led","devname"];function enabledItemsClass(){var i,j;var enable_flag;for(i=0;i<array_name.length;i++){var item_group;enable_flag=eval("top."+enable_flags[i]);item_group=eval(array_name[i]);for(j=0;j<item_group.length;j++){var cur_div=top.document.getElementById(item_group[j]);if(!cur_div){continue}var height=cur_div.getElementsByTagName("span")[0].clientHeight;if(cur_div.style.display=="none"){break}if(enable_flag=="1"){if(height>28){cur_div.className="long_grey"}else{if(height>14){cur_div.className="middle_grey"}else{cur_div.className="sub_grey"}}}}}if(top.have_lte_flag==1){var cur_div=top.document.getElementById("mobile_internet");var cur_div_1=top.document.getElementById("internet");var height=cur_div.getElementsByTagName("a")[0].clientHeight;var height_1=cur_div_1.getElementsByTagName("a")[0].clientHeight;if(top.broadband_wan_type=="AutoDetc"){if(height>28){cur_div.className="long_grey"}else{if(height>14){cur_div.className="middle_grey"}else{cur_div.className="sub_grey"}}}else{if(height>28){cur_div.className="long_name"}else{if(height>14){cur_div.className="middle_name"}else{cur_div.className="sub_back"}}}if(top.broadband_wan_type=="MyDetc"){if(height_1>28){cur_div_1.className="long_grey"}else{if(height_1>14){cur_div_1.className="middle_grey"}else{cur_div_1.className="sub_grey"}}}else{if(height_1>28){cur_div_1.className="long_name"}else{if(height_1>14){cur_div_1.className="middle_name"}else{cur_div_1.className="sub_back"}}}}}function menu_class_default(){var a;var c;a=top.document.getElementById("adv_home");settingClass(a,"advanced_black_button");if(top.have_lte_flag!=1){a=top.document.getElementById("adv_setup_wizard");if(master=="admin"&&(top.enabled_wds==1||top.enable_ap_flag==1||top.enable_bridge_flag==1||top.enable_extender_flag=="1"||top.device_mode=="1")){settingClass(a,"advanced_grey_button")}else{settingClass(a,"advanced_black_button")}}var d=["setup_bt","usb_bt","security_bt","green_bt","admin_bt","advanced_bt"];var b;for(b=0;b<d.length;b++){a=top.document.getElementById(d[b]);if(!a){continue}settingClass(a,"advanced_white_close_button")}enabledItemsClass()}function menu_color_change(b){menu_class_default();var a=top.document.getElementById(b);if(b=="adv_home"||b=="adv_setup_wizard"||b=="adv_wps"){settingClass(a,"advanced_purple_button");clickSubMenu(0,b)}else{var c=top.document.getElementById(b).parentNode.parentNode.id;var e=c.replace("sub","bt");var d=top.document.getElementById(e);settingClass(d,"advanced_white_open_button");clickSubMenu(a,b)}}function click_adv_action(id){if(id=="adv_setup_wizard"){setup_wizard_flag=1}else{setup_wizard_flag=0}if(enable_action==1){for(var i=0;i<array_name.length;i++){var item_group;var enable_flag=eval("top."+enable_flags[i]);var item_group=eval(array_name[i]);for(var j=0;j<item_group.length;j++){if(item_group[j]==id&&enable_flag==1){id="NOTACTIVE";break}}if(id=="NOTACTIVE"){break}}if(id=="adv_home"){menu_color_change("adv_home");if(enable_bridge_flag=="1"){goto_formframe("RST_bridge_status.htm")}else{goto_formframe("RST_status.htm")}}else{if(id=="adv_setup_wizard"&&master=="admin"&&top.enable_ap_flag!="1"&&top.device_mode!="1"){menu_color_change("adv_setup_wizard");if(top.dsl_enable_flag=="1"){goto_formframe("DSL_WIZ_sel.htm")}else{if(((top.netgear_region.toUpperCase()=="WW"||top.netgear_region=="")&&top.gui_region=="Russian")||top.netgear_region.toUpperCase()=="RU"){goto_formframe("RU_WIZ_sel.htm")}else{goto_formframe("WIZ_sel.htm")}}}else{if(id=="adv_wps"&&top.enabled_wps==1&&top.device_mode!="1"){goto_formframe("Add_WPS_Client.htm");menu_color_change("adv_wps")}else{if(id=="internet"){if(!(top.have_lte_flag==1&&top.broadband_wan_type=="MyDetc")){if(top.dsl_enable_flag==0){goto_formframe("BAS_basic.htm")}else{goto_formframe("BAS_basic_dsl.htm")}menu_color_change("internet")}}else{if(id=="wireless"){goto_formframe("WLG_wireless.htm");menu_color_change("wireless")}else{if(id=="guest"){goto_formframe("WLG_wireless_guest1.htm");menu_color_change("guest")}else{if(id=="byod"){goto_formframe("WLG_byod_network.html");menu_color_change("wireless")}else{if(id=="guest_portal"){goto_formframe("guest_portal.html");menu_color_change("guest_portal")}else{if(id=="wan"){goto_formframe("WAN_wan.htm");menu_color_change("wan")}else{if(id=="lan"){goto_formframe("LAN_lan.htm");menu_color_change("lan")}else{if(id=="qos"){if(top.support_qos=="1"){if(top.have_advanced_qos=="1"){goto_formframe("QOS_wait.htm")}else{please_wait(false);top.formframe.location.href="new_waiting_page.htm"}}else{goto_formframe("QOS_speedtest.htm")}menu_color_change("qos")}else{if(id=="usb_bas"){goto_formframe("USB_basic.htm");menu_color_change("usb_bas")}else{if(id=="usb_adv"){goto_formframe("USB_advanced.htm");menu_color_change("usb_adv")}else{if(id=="userset"){goto_formframe("hdd_usr_setup.htm");menu_color_change("userset")}else{if(id=="media"){goto_formframe("UPNP_media.htm");menu_color_change("media")}else{if(id=="cloud"){goto_formframe("/cgi-bin/RMT_invite.htm");menu_color_change("cloud")}else{if(id=="print"){goto_formframe("RMT_print.htm");menu_color_change("print")}else{if(id=="vault"){goto_formframe("RMT_vault.htm");menu_color_change("vault")}else{if(id=="mobile"){goto_formframe("BAS_mobile.htm");menu_color_change("mobile")}else{if(id=="parental"){open_window("parental_ctrl.htm");menu_color_change("parental")}else{if(id=="circle_parental"){goto_formframe("parental_basic.htm");menu_color_change("parental")}else{if(id=="block_site"){goto_formframe("BKS_keyword.htm");menu_color_change("block_site")}else{if(id=="block_services"){goto_formframe("BKS_service.htm");menu_color_change("block_services")}else{if(id=="schedule"){goto_formframe("FW_schedule.htm");menu_color_change("schedule")}else{if(id=="email"){goto_formframe("FW_email.htm");menu_color_change("email")}else{if(id=="ipmac"){goto_formframe("ipmac.htm");menu_color_change("ipmac")}else{if(id=="status"){if(top.have_lte_flag==1){goto_formframe("get_mobile_status.html")}else{if(enable_bridge_flag=="1"){goto_formframe("RST_bridge_status.htm")}else{goto_formframe("RST_status.htm")}}menu_color_change("status")}else{if(id=="log"){goto_formframe("FW_log.htm");menu_color_change("log")}else{if(id=="attached"){goto_formframe("DEV_device.htm");menu_color_change("attached")}else{if(id=="bak_set"){goto_formframe("BAK_backup.htm");menu_color_change("bak_set")}else{if(id=="passwd"){goto_formframe("PWD_password.htm");menu_color_change("passwd")}else{if(id=="upgrade"){goto_formframe("go_upgrade.htm");menu_color_change("upgrade")}else{if(id=="plc"){goto_formframe("PLC_wait_scan.htm");menu_color_change("plc")}else{if(id=="wladv"){goto_formframe("WLG_adv.htm");menu_color_change("wladv")}else{if(id=="wlap"){goto_formframe("WLG_wap.htm");menu_color_change("wlap")}else{if(id=="wl_bridge"){goto_formframe("WLG_bridge.htm");menu_color_change("wl_bridge")}else{if(id=="wds"){goto_formframe("WLG_wds.htm");menu_color_change("wds")}else{if(id=="forwarding_triggering"){goto_formframe("FW_forward.htm");menu_color_change("forwarding_triggering")}else{if(id=="dns"){goto_formframe("DNS_ddns.htm");menu_color_change("dns")}else{if(id=="static"){goto_formframe("STR_routes.htm");menu_color_change("static")}else{if(id=="remote"){goto_formframe("FW_remote.htm");menu_color_change("remote")}else{if(id=="usb_set"){goto_formframe("USB_settings.htm");menu_color_change("usb_set")}else{if(id=="upnp"){goto_formframe("UPNP_upnp.htm");menu_color_change("upnp")}else{if(id=="ipv6"){goto_formframe("IPv6_index.htm");menu_color_change("ipv6")}else{if(id=="tr069"){goto_formframe("tr069.htm");menu_color_change("tr069")}else{if(id=="traffic"){goto_formframe("traffic.htm");menu_color_change("traffic")}else{if(id=="green_basic"){goto_formframe("green_download.htm");menu_color_change(id)}else{if(id=="green_manager"){if(download_type=="bt"){goto_formframe("GREEN_bt_basic.htm")}else{if(download_type=="emule"){goto_formframe("GREEN_emule_basic.htm")}else{if(download_type=="http"){goto_formframe("GREEN_http_basic.htm")}else{goto_formframe("GREEN_bt_basic.htm")}}}menu_color_change(id)}else{if(id=="lte_broadband"&&top.have_lte_flag==1){goto_formframe("BAS_lte_broadband.htm");menu_color_change(id)}else{if(id=="mobile_internet"&&top.broadband_wan_type!="AutoDetc"){top.click_lte_sim=0;goto_formframe("check_mobile_internet_wait.htm");menu_color_change(id)}else{if(id=="sim"){top.click_lte_sim=1;goto_formframe("check_sim_wait.htm");menu_color_change(id)}else{if(id=="mobile_upg"){goto_formframe("UPG_module.htm");menu_color_change(id)}else{if(id=="access_control"){goto_formframe("access_control.htm");menu_color_change("access_control")}else{if(id=="led"){goto_formframe("LED_control_setting.htm");menu_color_change("led")}else{if(id=="vpn"){if(top.vpn_smartphone_flag==1){goto_formframe("openvpn_service.htm")}else{goto_formframe("vpn_service.htm")}menu_color_change("vpn")}else{if(id=="pptp_vpn"){goto_formframe("vpn_pptp.htm");menu_color_change(id)}else{if(id=="fbwifi"){goto_formframe("fbwifi.htm");menu_color_change("fbwifi")}else{if(id=="rae"){goto_formframe("rae_main.htm");menu_color_change("rae")}else{if(id=="vlan"){goto_formframe("VLAN_IPTV.htm");menu_color_change("vlan")}else{if(id=="devname"){goto_formframe("edit_device_name.htm");menu_color_change("devname")}else{if(id=="priozone"){goto_formframe("priority_zone.htm");menu_color_change("priozone")}else{if(id=="devmode"){goto_formframe("device_mode_setting.htm");menu_color_change("devmode")}else{if(id=="ntp"){goto_formframe("NTP_debug.htm");menu_color_change("ntp")}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}change_menu_height()};