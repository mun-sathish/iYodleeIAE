# iYodleeIAE - Dedicated to Buggers..!! (by Sathish Dustakar)
***************************************************************


# Contents
1. Short Description of the extension
1. Installation
2. Usage Restrictions
3. Features
4. Conclusion

# Short Description of the extension

- Every bug fixing developer, generally uses FIREMEM, QUERY CENTER, ADT & SPLUNK. 
- We spend quite a few time to perform login, navigating, & clicking on many elements. Also since its get timedout, we have to go to start from ToolCenter everytime.
- This extension helps to trigger firemem, querying a user, code push in ADT & opening splunk stats from anywhere & quite faster.
- It is coded with intelligence where depending on the developer's usages, it displays Cobrands & Queries which he/she uses frequently as displayed in QC.


# Installation Instructions

1. Goto "chrome://extensions/" 
2. Click on "Developer Mode" checkbox which is in Top of Page.
2. Click on "Load unpacked extension…" & browse to "iYodleeIAE" folder which contains "manifest.json" file & click "ok".
3. Open Query Center.
4. Hurray..!!! You can now start using the extension.
5. Use keyboard Shortcut "Alt + S" to start the extension.


# Usage Instructions

* Move the cursor over the tabs, clicking not needed.
* Don't trigger firemem via extension in blank tabs
* Splunk -> If multiple Class, SII, Site ID required, provide with seperated commas ','
* Make sure to be logged in any service before using via extension.


# Features

1. FIREMEM
	* Trigger Firemem in a blink of an eye without navigating to anywhere in Platform, Developer or Production Environment.
	* Most of the options are defaultly selected.
	* Just need to provide ItemID & choose Environment & click on "Submit", rest of the effort will be taken care automatically.
	* Database is provided in dropdown based on your regular usages, in rare cases you can manually provide DB name in the input field if required.

2. QUERY CENTER
	* In-built Intelligence where based on the developer usages, Queries & Cobrands are being displayed. 
	* Also after getting the result, Queries is displayed to navigate quickly based on the values available on the screen.
	* For easy access, below values will be displayed if found on the query result.
		- MSA
		- CII
		- Site ID
		- Sum Info
		- Script Latency in Sec
		- No of Successful Refresh
	* Use "\<Process Log Generator\>" to generate shell script commands to get the process log of the given row number.
	* Use "Open Dump in New Tab" button to open the dump of the row you would like to access.

3. Splunk
	* If you want to open multiple stats at a single shot, then fill the form seperated with commas, rest is taken care automatically.
	* Depending on the number of values provided, respective number of tabs will be opened for you.

4. ADT
	* You need to just open ADT even if it is logged out from ToolCenter. You will be logged in automatically & navigates to the Migration Page & asks for SUMINFO.
	* If Base Class needs to be pushed? click on cancel, you will be moved to that place & now provide Agent Name & Version and click "Submit" to see next automatically.
	* If DB push required, click on DB Radio button, you will be prompted for SITE ID & rest job is taken care.

5. COMMON TO ALL
	* Automatic Logging In from ToolCenter & navigating to respective pages is taken care by the extension for ALL 3 Firemem Environments, Query Center, ADT.


# CONCLUSION

My sincere thanks to Sanyam Jain (DAT Ext) & Harsh Mehta (Personal Ext) whose extensions inspired me to create this iYodlee IAE Chrome Extension.