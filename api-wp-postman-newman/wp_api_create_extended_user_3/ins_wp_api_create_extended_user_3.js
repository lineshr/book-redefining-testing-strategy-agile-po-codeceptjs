/**
 * Postman wp_api_create_extended_user_3
 * Test Script file : ins_wp_api_create_extended_user_3.js
 * Pre-request Script file : pre_wp_api_create_extended_user_3.js
 * Version : 1.0
 * Description: Test WP REST API
 * Collection : 0003_codecepjs_WP_API.postman_collection.json
 * Method: POST
 */
 


/* ********* ENVIRONMENT *********** */

var wp_local_api_path = pm.environment.get("wp_local_api_path");
    console.log ("ENVIRONMENT :: wp_local_api_path :: "+wp_local_api_path+" ");

    

/* ********* // ENVIRONMENT *********** */
/* ********* JSON *********** */
var jsonData = JSON.parse(responseBody);
// console.log ("RESPONSE :: responseBody :: "+responseBody+" ");
/* ********* // JSON *********** */

/* HTTP TESTS  */

pm.test("HTTP REQUEST :: "+wp_local_api_path+" :: Response time is less than 1200ms", function () {
pm.expect(pm.response.responseTime).to.be.below(1200);
});


pm.test("HTTP REQUEST :: "+wp_local_api_path+" :: Status code is 201", function () {
				pm.response.to.have.status(201);
});


pm.test("HTTP REQUEST :: "+wp_local_api_path+" :: Response should be an array", function () {
    // console.log ("API :: typeof(jsonData) :: "+((typeof(jsonData)))+"");
	pm.expect(((typeof(jsonData)))).to.equal('object');
	
	
});

	pm.test("API :: Check JSON's structure for USER", function () {
                   
					console.log ("API :: user_id :: "+jsonData.id+"");
					pm.expect(isNaN(jsonData.id)).to.be.false;
					pm.expect(jsonData).to.have.property('id');
					pm.expect(jsonData).to.have.property('name');
					pm.expect(jsonData).to.have.property('url');
					pm.expect(jsonData).to.have.property('description');
                   
				});

			pm.test("API :: Check content type for USER", function () {
			        
					console.log ("API :: user_id :: "+jsonData.id+"");
 					pm.expect(jsonData.name).to.be.a('string');
 					pm.expect(jsonData.link).to.be.a('string');
 					pm.expect(jsonData.id).to.be.a('number');
			       
				});


