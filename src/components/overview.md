There is already a website that does this : https://www.hospitalcostcompare.com

Perhaps there is another way? 

It seems like we'll need to maintain two sets of data. One needs to be maintained which has procedure codes and descriptions (long/ short / other) of procedures as described by the  U. S. DEPARTMENT OF HEALTH AND HUMAN SERVICES.

The other information a) each hospital's service list (which may or not be obfuscated and have different names or descriptions of services), and b) the prices.

This information could be parsed and updated on a google sheets database or a personal db.

If using gdocs, the api : 
https://github.com/Iwark/react-native-spreadsheet

So we'll need to present some search fields for procedure code and description of procedure / diagnosis. 
The app should then find the most likely procedure code for that. 
For each hospital within X distance, we'll check if they have that procedure code. If they have it, it will appear in the list. 

Based on filter options, we will :
a) Then we'll compare the price and sort the list based on that price. 

b) We'll compare the hospital reviews and listem based on reviews

c) We'll compare the price and list them. For hospitals with similar prices, we'll further sort a hospital with a better rating. 