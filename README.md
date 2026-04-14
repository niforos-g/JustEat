# JustEat Restaurant Viewer

A simple web interface that displays restaurant information from the JustEat API for UK postal codes.

---

## Description

- This project demonstrates how to fetch restaurant data from the JustEat API using UK postal codes and display details for the first 10 results.

---

## Requirements

- The following 3 files must be downloaded from this repository and saved in the same folder.
     - node_proxy.js
     - app.js
     - RestaurantFinder.html
- Node.js must also be installed in order for the proxy server to work: https://nodejs.org/en

---

## How to Run

### (First time only)

Make sure all requirements are fulfilled. Open a terminal and navigate to the folder where the 3 files are saved.

Run the following commands:

`npm init -y`  
`npm install express node-fetch@2`

After installing the dependencies, continue with the steps below.

---

### Steps to run

1. Navigate to the project directory and start the proxy:

`node node_proxy.js`

2. Once the proxy is running, open the `RestaurantFinder.html` file in your browser.

3. In the search bar at the top, enter a postal code and press **Search**.

4. The first 10 restaurants will be displayed along with their details.

---

## NOTE

### Available postal codes:

CT12EH, BS14DJ, L40TH, NE97TY, SW1A1AA,  
CF118AZ, M160RA, EH11RE, BN11AE, CB74DL,  
LS27HY, G38AG, PL40DW, B263QJ, DH45QZ,  
BT71NN, EC4M7RF, W92JE  

You can add more postal codes in the `validPostcodes` list at the top of the `app.js` file, following the same format.

---

## Assumptions / Improvements

- The instructions for this assignment were very clear. The only challenge was accessing the API endpoint due to CORS policy restrictions. This was resolved using a proxy server.

- The interface has room for improvement depending on requirements. Possible enhancements include:

1. Adding an autocomplete box for postal codes (with more options)
2. Adding sorting options (e.g. best rated, recently opened, promotions, alphabetical order)
3. Adding filters:
   - Cuisine type
   - Rating range
   - Delivery options / price range
4. Separating restaurant deals from cuisine types
