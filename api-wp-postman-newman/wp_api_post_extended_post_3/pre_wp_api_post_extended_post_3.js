/**
 * Postman wp_api_post_extended_post_3
 * Test Script file : ins_wp_api_post_extended_post_3.js
 * Pre-request Script file : pre_wp_api_post_extended_post_3.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: GET
 */

/* ********* ENVIRONMENT *********** */

    var wp_local_api_path = pm.environment.get("wp_local_api_path");
    var timestampHeader = pm.environment.get("TimestampHeader");
    
    
    var RandomOneLodash = pm.environment.get("RandomOneLodash");
    var RandomTwoLodash = pm.environment.get("RandomTwoLodash");
    var RandomThreeLodash = pm.environment.get("RandomThreeLodash");
    var RandomFourLodash = pm.environment.get("RandomFourLodash");
    
    // Texte with Lodash
    var RandomTxtLodash = pm.environment.get("RandomTxtLodash");
    

    console.log ("ENVIRONMENT :: RandomOneLodash :: "+RandomOneLodash+" ");
    console.log ("ENVIRONMENT :: RandomTwoLodash :: "+RandomTwoLodash+" ");
    console.log ("ENVIRONMENT :: RandomThreeLodash :: "+RandomThreeLodash+" ");
    console.log ("ENVIRONMENT :: RandomFourLodash :: "+RandomFourLodash+" ");
    
    console.log ("ENVIRONMENT :: RandomTxtLodash :: "+RandomTxtLodash+" ");


// Header if needed
// var jsonDataHeader = JSON.stringify(request.headers);
// console.log("HEADERS :: jsonDataHeader :: "+jsonDataHeader+"");
// console.log("CODE :: pm.response.code :: "+pm.response.code+"");


/* ********* // ENVIRONMENT *********** */


/* ********* JSON *********** */
var jsonData = JSON.parse(responseBody);
// console.log ("JSON :: jsonData :: "+jsonData+"");
/* ********* // JSON *********** */

    /* HTTP TESTS  */
    pm.test("HTTP REQUEST :: "+wp_local_api_path+" :: Response time is less than 1200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
    });
        
 

    pm.test("HTTP REQUEST :: Status code name has string :: Created", function () {
        pm.response.to.have.status("Created");
    });

    // Successful POST request status code
    pm.test("HTTP REQUEST :: Successful POST request :: 201 or 202", function () {
        pm.expect(pm.response.code).to.be.oneOf([201,202]);
    });



pm.test("STRUCTURE GENERAL :: result :: OK", function () {
            // assert that the status code is 201
            pm.expect(pm.response.code).to.equal(201); // info, success, redirection, clientError,  serverError, are other variants
            // assert that the response has a valid JSON body
            pm.response.to.be.withBody; // this assertion also checks if a body  exists, so the above check is not needed
            pm.response.to.be.json;
            pm.response.to.not.be.error;
            // pm.response.to.have.jsonBody(""); 
            pm.response.to.not.have.jsonBody("error"); 
            pm.expect(jsonData).to.not.be.empty;
        });


pm.test("HTTP REQUEST :: "+wp_local_api_path+" :: Response should be an array", function () {
    // console.log ("API :: typeof(jsonData) :: "+((typeof(jsonData)))+"");
    pm.expect(((typeof(jsonData)))).to.equal('object');
    
    
});
     

            // console.log ("API :: post_id :: "+jsonData.id+"");
            pm.test("API :: Check JSON's structure for POST", function () {
                    // console.log ("API :: post_id :: "+jsonData.id+"");
                    pm.expect(isNaN(jsonData.id)).to.be.false;
                    pm.expect(jsonData).to.have.property('id');
                    pm.expect(jsonData).to.have.property('title');
                    pm.expect(jsonData).to.have.property('content');
                    pm.expect(jsonData).to.have.property('excerpt');
                });

            pm.test("API :: Check content type for POST", function () {
                    // console.log ("API :: post_id :: "+jsonData.id+"");
                    pm.expect(jsonData.title.rendered).to.be.a('string');
                    pm.expect(jsonData.content.rendered).to.be.a('string');
                    pm.expect(jsonData.excerpt.rendered).to.be.a('string');
                    pm.expect(jsonData.author).to.be.a('number');
                    pm.expect(jsonData.featured_media).to.be.a('number');
                });




