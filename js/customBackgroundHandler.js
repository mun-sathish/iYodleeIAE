var queryDict;if(url=window.location.href,console.log("Hey Guyz... Hope your utilizing iYodleeIAE Extension to the fullest... Don't forget to share your feedback to me... !!! ;-) [Note: Press Alt-S to start the extension]"),initVar(),reDirectingURL(),url.indexOf("https://querycenter.yodlee.com/yadweb/querytool/querytool_result.action")>=0){document.title=document.querySelector("#queryResultInfo > tbody > tr:nth-child(2) > td:nth-child(4)").innerText,(styleNode=document.createElement("style")).type="text/css";var styleText=document.createTextNode(".fashionableButton { -moz-box-shadow:inset 0px 1px 0px 0px #dcecfb; -webkit-box-shadow:inset 0px 1px 0px 0px #dcecfb; box-shadow:inset 0px 1px 0px 0px #dcecfb; background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #bddbfa), color-stop(1, #80b5ea) ); background:-moz-linear-gradient( center top, #bddbfa 5%, #80b5ea 100% ); filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea'); background-color:#bddbfa; -moz-border-radius:8px; -webkit-border-radius:8px; border-radius:8px; border:1px solid #84bbf3; display:inline-block; color:#ffffff; font-family:Arial; font-size:12px; font-weight:bold; padding:4px 8px; text-decoration:none; text-shadow:1px 1px 0px #528ecc; cursor: pointer; } .fashionableButton:hover { background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #80b5ea), color-stop(1, #bddbfa) ); background:-moz-linear-gradient( center top, #80b5ea 5%, #bddbfa 100% ); filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa'); background-color:#80b5ea; } .fashionableButton:active { position:relative; top:1px; } ");function getParameterByName(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}styleNode.appendChild(styleText),document.getElementsByTagName("head")[0].appendChild(styleNode);for(var cii,msa,siteId,sii,noOfSuccessRefresh,scriptLatInSec,transId,gathererIp,dumpCreated,ciiIndex,msaIndex,siiIndex,siteIndex,noOfSucIndex,scriptLatIndex,dumpCreatedIndex,gathererIpIndex,transIdIndex,cobrandID=getParameterByName("cobrandId"),resultTable=document.querySelector("#queryResult_wrapper > div.dataTables_scroll > div.dataTables_scrollHead > div > table > thead"),tableHeaders=resultTable.getElementsByTagName("th"),i=0;i<tableHeaders.length;i++)tableHeaders[i].innerText.indexOf("MEM_SITE_ACC_ID")>=0&&(msaIndex=i),tableHeaders[i].innerText.indexOf("CACHE_ITEM_ID")>=0&&(ciiIndex=i),tableHeaders[i].innerText.indexOf("SITE_ID")>=0&&(siteIndex=i),tableHeaders[i].innerText.indexOf("SUM_INFO_ID")>=0&&(siiIndex=i),tableHeaders[i].innerText.indexOf("SCRIPT_LATENCY_IN_SECS")>=0&&(scriptLatIndex=i),tableHeaders[i].innerText.indexOf("NUM_SUCCESSFUL_REFRESH")>=0&&(noOfSucIndex=i);var msaFound=!1,ciiFound=!1,siiFound=!1,siteFound=!1,noOfSucFound=!1,scriptLatFound=!1,dumpCreatedFound=!1,gathererIpFound=!1,transIdFound=!1,noOfRows=document.getElementById("queryResult_info").innerText;noOfRows=noOfRows.split("to")[1].split("of")[0].trim();for(i=1;i<=parseInt(noOfRows)&&(!msaFound||!ciiFound);i++){if(null!=msaIndex&&!msaFound){var itemQuerySelector="#queryResult > tbody > tr:nth-child("+i+") > td:nth-child("+(msaIndex+1)+") > div";0!=(msa=document.querySelector(itemQuerySelector).innerText).length&&(msaFound=!0)}if(null!=ciiIndex&&!ciiFound){itemQuerySelector="#queryResult > tbody > tr:nth-child("+i+") > td:nth-child("+(ciiIndex+1)+") > div";0!=(cii=document.querySelector(itemQuerySelector).innerText).length&&(ciiFound=!0)}if(null!=siiIndex&&!siiFound){itemQuerySelector="#queryResult > tbody > tr:nth-child("+i+") > td:nth-child("+(siiIndex+1)+") > div";0!=(sii=document.querySelector(itemQuerySelector).innerText).length&&(siiFound=!0)}if(null!=siteIndex&&!siteFound){itemQuerySelector="#queryResult > tbody > tr:nth-child("+i+") > td:nth-child("+(siteIndex+1)+") > div";0!=(siteId=document.querySelector(itemQuerySelector).innerText).length&&(siteFound=!0)}if(null!=noOfSucIndex&&!noOfSucFound){itemQuerySelector="#queryResult > tbody > tr:nth-child("+i+") > td:nth-child("+(noOfSucIndex+1)+") > div";0!=(noOfSuccessRefresh=document.querySelector(itemQuerySelector).innerText).length&&(noOfSucFound=!0)}if(null!=scriptLatIndex&&!scriptLatFound){itemQuerySelector="#queryResult > tbody > tr:nth-child("+i+") > td:nth-child("+(scriptLatIndex+1)+") > div";0!=(scriptLatInSec=document.querySelector(itemQuerySelector).innerText).length&&(scriptLatFound=!0)}}var body=document.body,scri=document.createElement("script");scri.text="function triggerRequest(queryCode, itemId, itemType, cobrandID){\tvar actionURL = 'https://querycenter.yodlee.com/yadweb/querytool/querytool_result.action?cobrandId='+cobrandID+'&queryCode='+queryCode+'&queryParamValue0='+itemId+'&queryParamName0='+itemType+'&numParams=1&downloadRequired=download';\twindow.open(actionURL, '_blank');} \tfunction popProcessLogs(isOpenDump){\tvar dumpCreatedIndex, gathererIpIndex, transIdIndex, transId, gathererIp, dumpCreated, dumpCreatedFound = false, gathererIpFound = false, transIdFound = false, dumpUrlIndex, dumpUrl;\tvar rowNumber = document.getElementById('logInput').value;\tif(rowNumber.length == 0)\t\treturn;\tvar resultTable = document.querySelector('#queryResult_wrapper > div.dataTables_scroll > div.dataTables_scrollHead > div > table > thead');\tvar tableHeaders = resultTable.getElementsByTagName('th');\tfor (var i = 0; i <tableHeaders.length; i++) {\t     if((tableHeaders[i].innerText).indexOf('DUMP_CREATED_IN_PST')>=0){\t        dumpCreatedIndex = i;\t     }\t     if((tableHeaders[i].innerText).indexOf('GATHERER_IP')>=0){\t         gathererIpIndex = i;\t     }\t     if((tableHeaders[i].innerText).indexOf('TRANSACTION_ID')>=0){\t         transIdIndex = i;\t     }\t     if((tableHeaders[i].innerText).indexOf('DOCUMENT_DUMP_FILE')>=0){\t         dumpUrlIndex = i;\t     }\t }\t if(isOpenDump == 'true' && dumpUrlIndex != null)\t {\t \tvar itemQuerySelector = '#queryResult > tbody > tr:nth-child('+rowNumber+') > td:nth-child('+ (dumpUrlIndex +1) +') > div';\t\tdumpUrl = document.querySelector(itemQuerySelector).innerText;\t\tif(dumpUrl.length != 0)\t\t\twindow.open(dumpUrl, '_blank');\t\telse\t\t\talert('Dump not found');\t\treturn;\t }\tif(dumpCreatedIndex != null && !dumpCreatedFound)\t{\t\tvar itemQuerySelector = '#queryResult > tbody > tr:nth-child('+rowNumber+') > td:nth-child('+ (dumpCreatedIndex +1) +') > div';\t\tdumpCreated = document.querySelector(itemQuerySelector).innerText;\t\tif(dumpCreated.length != 0)\t\t\tdumpCreatedFound = true;\t}\tif(gathererIpIndex != null && !gathererIpFound)\t{\t\tvar itemQuerySelector = '#queryResult > tbody > tr:nth-child('+rowNumber+') > td:nth-child('+ (gathererIpIndex +1) +') > div';\t\tgathererIp = document.querySelector(itemQuerySelector).innerText;\t\tif(gathererIp.length != 0)\t\t\tgathererIpFound = true;\t}\tif(transIdIndex != null && !transIdFound)\t{\t\tvar itemQuerySelector = '#queryResult > tbody > tr:nth-child('+rowNumber+') > td:nth-child('+ (transIdIndex +1) +') > div';\t\ttransId = document.querySelector(itemQuerySelector).innerText;\t\tif(transId.length != 0)\t\t\ttransIdFound = true;\t}\tif(gathererIpFound && transIdFound && dumpCreatedFound)\t{\t\tvar day = dumpCreated.split(' ')[0].split('-');\t\tgathererIp = gathererIp.replace('\\n','');\t\ttransId = transId.replace('\\n','');\t\tvar processLogScript = \"cd /store2/GL/YLogs/\"+gathererIp+\" <br>zcat ylogs.\"+gathererIp+\".\"+day[2] + day[0] + day[1]+\"*.tar.gz | tr -d '\\\\000' | grep -A 10000 '\"+transId+\"'\";\t\tdocument.querySelector('#queryTooltip').innerHTML += '<br><br>'+processLogScript;\t}\telse\t\talert('Process Log not available for the given row');}",body.appendChild(scri),chrome.storage.local.get("qcQueries",function(e){var t=e.qcQueries,i={};for(var o in t)i[t[o][0]]=t[o][1];var n=document.querySelector("#queryTooltip");n.innerHTML+=" <span style='font-weight:bold; text-decoration: underline;'>&lt;Process Log Generator></span> <input type='number' id='logInput' placeholder='Row Number' style='padding:3px;'></input> <input style='padding:3px;' type='button' value='Generate' id='logBtn' onclick=\"popProcessLogs('false');\"></input><input type='button' style='margin-left:5px;padding:3px;' value='Open Dump in New Tab' id='dumpBtn' onclick=\"popProcessLogs('true');\"></input>",n.innerHTML+="<br>Found Values<br>MSA:"+msa+" | CII:"+cii+" | SII:"+sii+" | SiteID:"+siteId+" | Script Lat:"+scriptLatInSec+" | No of Refresh:"+noOfSuccessRefresh+"<br>";var r=1;for(var d in queryDict){var a=document.createElement("button");a.className="fashionableButton",a.innerText=d,a.style.margin="2px",ciiFound&&"cii"==queryDict[d]&&null!=i[d]&&(r++,a.setAttribute("onclick","triggerRequest('"+i[d]+"', '"+cii+"', 'CACHE_ITEM_ID', '"+cobrandID+"')"),n.appendChild(a),r%5==0&&(n.innerHTML+="<br>")),msaFound&&"msa"==queryDict[d]&&null!=i[d]&&(r++,a.setAttribute("onclick","triggerRequest('"+i[d]+"', '"+msa+"', 'MEM_SITE_ACC_ID', '"+cobrandID+"')"),n.appendChild(a),r%5==0&&(n.innerHTML+="<br>"))}})}if(url.indexOf("querytool_input.action")>=0){document.getElementById("querySelectionForm").setAttribute("method","get");for(var qcCobrands={},count=0;;){if(null==(v=document.querySelector("#topCobrandsQueriedByUserResultVO"+count)))break;var coID=v.title.match("[[0-9a-zA-Z_]*]")[0].substr(1).slice(0,-1);qcCobrands[count]=[v.innerText,coID.split("_")[0],coID.split("_")[1]],count+=1}0!=Object.keys(qcCobrands).length&&chrome.storage.local.set({qcCobrands:qcCobrands});var qcQueries={};for(count=0;;){var v;if(null==(v=document.querySelector("#topQueriesByUserResultVO"+count)))break;var qcCode=v.getAttribute("onclick");qcQueries[count]=[v.innerText,qcCode.substr(13).slice(0,-3)],count+=1}0!=Object.keys(qcQueries).length&&chrome.storage.local.set({qcQueries:qcQueries})}if(url.indexOf("update.yodlee.com:1443/DeployToolWeb/migration/agent_migration?action=migration_request")>=0){var styleNode,scriptNode=document.createElement("script"),bodyNode=document.getElementsByTagName("body")[0],customHtmlNode=document.querySelector("#massPush > table > tbody > tr:nth-child(8) > td"),isMassPushShown=!1;(styleNode=document.createElement("style")).type="text/css";styleText=document.createTextNode("#agentName, #agentVersion {  padding: 5px 10px; margin: 8px 0; box-sizing: border-box; border: 1px solid #0000A0; outline: none; } #agentName:focus, #agentVersion:focus  { background-color: #0000A0; color: white; } ::-webkit-input-placeholder {  color: white; } #agentSubmit { background-color: #0000FF; border: 2px solid #008000; color: white; padding: 10px 15px; text-decoration: none; margin: 4px 2px; cursor: pointer; border-radius: 12px; } #agentSubmit:hover, #agentSubmit:focus { background-color: #008000; }");styleNode.appendChild(styleText),customHtmlNode.innerHTML+="<div>\t  <input id='agentName' placeholder='Agent Name'></input>\t  <input id='agentVersion' placeholder='Agent Version'></input>\t  <input id='agentSubmit' type='button' value='Submit' onclick='populate();'></input>\t</div>",document.getElementsByTagName("head")[0].appendChild(styleNode),document.getElementById("cmbAgentpushradio").setAttribute("onclick","show_hide('agentpush', 'dbpush'); radioBtnClickHandler('cmbAgentpushradio');"),document.getElementById("cmbDbpushradio").setAttribute("onclick","show_hide('dbpush', 'agentpush'); radioBtnClickHandler('cmbDbpushradio');"),scriptNode.text="function radioBtnClickHandler(tagId)\t{\t\tif(tagId == 'cmbAgentpushradio')\t\t{\t\t\tdocument.getElementById('dapPlatform').checked = 'true';\t\t\thide_showEnv('dap');\t\t\tvar res = prompt('Enter Suminfo');\t\t\tif( res!=null){\t\t\t\tdocument.getElementById('txtSumInfoId').value = res;\t\t\t\tdocument.getElementById('cmbMigrationFolder').value = '4';\t\t\t\tgetAgentInfo();\t\t\t}\t\t\telse\t\t\t{\t\t\t\tvar viewid = document.getElementById('massPush');\t\t\t\tvar display = viewid.style.display == 'inline' ? true : false;\t\t\t\tif (!display)\t\t\t\t\tviewid.style.display = 'inline';\t\t\t\tdocument.getElementById('dapPlatform').scrollIntoView();\t\t\t\tdocument.getElementById('agentName').focus();\t\t\t}\t\t}\t\telse if (tagId = 'cmbDbpushradio')\t\t{\t\t\tdocument.getElementById('windowsPlatform').checked = 'true';\t\t\thide_showEnv('windows');\t\t\tvar viewid = document.getElementById('massPush');\t\t\tvar display = viewid.style.display == 'inline' ? true : false;\t\t\tif (display)\t\t\t\tviewid.style.display = 'none';\t\t\tvar res = prompt('Enter Site ID');\t\t\tif(res != null)\t\t\t{\t\t\t\tdocument.getElementById('txtSiteId').value = res;\t\t\t\tdocument.getElementById('cmbLogoFaviconReqd').value = '0';\t\t\t\tgetSiteInfo();\t\t\t}\t\t}\t}\tfunction populate(){\t\tdocument.getElementById('txtMassPushString').innerText = document.getElementById('agentName').value + '\t1\ty\tn\tn\t' + document.getElementById('agentVersion').value + '\t4'; \t\tselectEnvironments('chk_DAP_-Developer Firemem', 'DAP'); \t\tselectEnvironments('chk_DAP_-Platform Firemem', 'DAP'); \t\tdocument.querySelector('#nonFooter > table:nth-child(7) > tbody > tr:nth-child(2) > td > form').submit(); }",bodyNode.appendChild(scriptNode),document.getElementById("cmbAgentpushradio").click()}function reDirectingURL(){if(url.indexOf("https://update.yodlee.com:1443/DeployToolWeb/")>=0&&document.body.innerText.indexOf("Your ADT login session has expired. Re-login to ADT from ToolCenter")>=0)window.location.href="https://toolcenter.yodlee.com/toolcenter/auto_login.do?tnic=X%2cv";else switch(url){case"https://update.yodlee.com:1443/DeployToolWeb/home/":case"https://update.yodlee.com:1443/DeployToolWeb/home/index.jsp":window.location.href="https://update.yodlee.com:1443/DeployToolWeb/migration/agent_migration?action=migration_request";break;case"https://querycenter.yodlee.com/yadweb/jsp/error/invalid_access.jsp":window.location.href="https://toolcenter.yodlee.com/toolcenter/auto_login.do?tnic=7X%2c";break;case"https://developeryoshi.yodlee.com:8443/j/login":window.location.href="https://toolcenter.yodlee.com/toolcenter/auto_login.do?tnic=%2cFiFQqrFB%607q%3fJ5";break;case"https://172.17.25.20:9843/j/login":window.location.href="https://toolcenter.yodlee.com/toolcenter/auto_login.do?tnic=%2cXr%607q%3fJ5";break;case"https://yoshiee.yodlee.com/j/login":window.location.href="https://toolcenter.yodlee.com/toolcenter/auto_login.do?tnic=rBq%2c%607q%3fJ5";break;case"https://yoshiee.yodlee.com/j/welcome":window.location.href="https://yoshiee.yodlee.com/springapp/firemem";break;case"https://developeryoshi.yodlee.com:8443/j/welcome":window.location.href="https://developeryoshi.yodlee.com:8443/springapp/firemem";break;case"https://172.17.25.20:9843/j/welcome":window.location.href="https://172.17.25.20:9843/springapp/firemem"}}function initVar(){queryDict={ACCT_DEDUP_MID:"mid",ACCT_VERIFICATION_DATA:"cii",ALT_DISP_REQ:"cii",ALT_SETUP:"cii",ALT_TRIGGER:"cii",ALT_XML:"cii",BNK_ACCT:"cii",BNK_TRANS:"cii",BPAA_REQUEST:"none",BPS_PAYEE_DETAILS:"cii",CACHE_INFO_DETAILS:"cii",CACHE_INFO_MSA_DETAILS:"msa",CRD_ACCT:"cii",CRD_STMT_AND_BILL:"cii",CRD_TRANSACTIONS:"cii",DATA_SOURCE_COVERAGE:"cid",DOC_DOWNLOAD:"cii",DOC_DOWNLOAD_DET:"cii",DPT_DAILY_ACCOUNT:"mii",DPT_MONTHLY_ACCOUNT:"mii",DPT_WEEKLY_ACCOUNT:"mii",DUP_BANK:"cii",DUP_CARD:"cii",DUP_INVESTMENT:"cii",EBL_BILL_HISTORY:"cii",EBL_BILL_REVISION:"none",EBL_LATEST_BILL:"cii",EBL_PAYEE_ACCOUNT_DETAILS:"cii",EBL_PAYMENT_RULE_HISTORY:"none",EBL_SCHED_PAYMENT_WITH_LATEST_RULE:"none",EBL_SITE_PAYMENT_HISTORY:"cii",EBL_YODLEE_PAYMENTS:"none",EDG_COB_PARAM:"cid",EDG_REFRESH_WINDOW_SII:"sii",EDG_REF_WIN_CII:"cii",EDG_REF_WIN_COB_SII:"cid,sii",EDG_REF_WIN_COB_TAG:"none",EDG_REF_WIN_TAG:"none",IAV_DATA_REQUEST:"cii",IAV_PLUS:"cii",INS_ACCOUNTS:"cii",INS_STMT:"cii",INS_TRANS:"cii",INV_ACCTS:"cii",INV_BALANCE:"cii",INV_HOLDING:"cii",INV_OPTIONS:"cii",INV_TRANS:"cii",LOAN_STMT:"cii",LOM_ACCOUNTS:"cii",LOM_PAYOFF_DET:"cii",LOM_TRANSACTIONS:"cii",MESSAGE_STATUS_ID_DETAILS:"none",MII_DETAILS_IAI:"none",MTD_IS_MFA_ENBLD_COB:"cid",MTD_METAFIELD:"sii",MTD_NORM:"sii",MTD_NORM_CLASS:"cname",MTD_SECURITY_QUES:"sii",MTD_SII_ENBLD_DISBLD:"cid,sii",MTD_SITE:"sii",MTD_SPL_PRSNG:"sii",MTD_TXN_SEL_DURN:"sii","Mii to Cii conversion":"mii",PAM_CARD_DETAILS_MEM_ID:"mid",PAM_DIR_FOR_CII:"cii",PAM_DIR_TXN_ID:"none",PAM_FOR_CII:"cii",PAM_PAYEE_DET:"cii",PAM_SCHD_CII:"cii",PAM_SCHEDULED_PAYM:"none",PAM_TXN_ID:"none",REW_ACCOUNTS:"cii",REW_ACTIVITY:"cii",REW_BALANCE:"cii",SERVER_STATS_CII:"cii",SERVER_STATS_MSA:"msa",USR_AGGR_ACCT_CII:"cii",USR_AGGR_ACCT_EMAIL:"none",USR_AGGR_ACCT_MID:"mid",USR_AGGR_ACCT_MSA:"msa",USR_AGGR_ACCT_USERNAME:"none",USR_DETAILS_CII:"cii",USR_DETAILS_MSA:"msa",USR_LOGIN_TIME:"cii",USR_MFA_QUESTION_ANSWER:"cii",USR_MFA_QUESTION_ANSWER_MSA:"msa",USR_MID_DET_FName:"none",USR_MID_DET_LName:"none",USR_MID_DET_MName:"none",USR_PSWD_LAST_UPDATED_CII:"cii",USR_PSWD_LAST_UPDATED_MSA:"msa",USR_SUBRAND_DET_LOGIN_NAME:"none"}}