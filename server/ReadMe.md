## Database Schema and APIs Documentation
    ![Databse](https://github.com/XinyuYang/FormationHelper/raw/master/server/dbSchema.png)
#### How to Deploy the Server Locally
1. Setup mysql and configure database on your local machine
    - If you haven't install MySQL, install it!
    - Open your terminal
        ```
        mysql -u <username> -p
        # This will prompt you to enter your password
        # default username and password are both: root
        ```
    - Create database called formationHelper
        ```
        create database formationHelper;
        ```
    - Make sure the port for MySQL is ```3306``` (by default)

2. Open the ```pom.xml```  in the server folder and install all maven dependencies for Spring Boot

3. ```cd``` directory ```server/src/main/java/com.formationHelper``` and run ```FormationHelperApplication.java```

4. Once you see ```Started FormationHelperApplication in 4.277 seconds (JVM running for 5.134)``` in the console, the server side is successfully deployed locally.

#### Usage of each API

1. User
    - ```addUser(User user) -> POST```
        - Description: add a new user
        - Url: http://localhost:8080/addUser
        - Request Body:
        ```json 
        {
           "user_name" : "abc",
           "password" : "123456"
        }
        ```
    - ```deleteUser(Integer userId) -> DELETE```: 
        - Description: delete a user with specified id
        - Url: http://localhost:8080/deleteUser/{userId}
        - Example: delete user with id 12
        http://localhost:8080/deleteUser/12

2. Dance
    - ```getAllDance(Integer userId, Pageable pageable) -> GET```
        - Description: load all the dances given the userId
        - Url: http://localhost:8080/user/{userId}/getAllDance
        - Example: load all the dances of user with id 12
        http://localhost:8080/user/12/getAllDance
    - ```addDance(Integer userId, Dance dance) -> POST```
        - Description: add a new dance to the dancer with specified id. Throw exception if user is null.
        - Url: http://localhost:8080/user/{userId}/createDance
        - Request Body:
        ```json
        {
          "numDancers" : "10",
          "dance_name" : "Worth it",
          "music_url" : "http://example_url"
        }
        ```
        - Example: add a dance to the dancer with id 12
        http://localhost:8080/user/12/createDance
    - ```saveDance(Integer userId, Integer danceId, Dance danceRequest) -> PUT```
        - Description: update the specified dance of specified dancer. Throw exception if user or dance is null.
        - Request Body:
        ```json
        {
          "numDancers" : "10",
          "dance_name" : "Worth it",
          "music_url" : "http://example_url"
        }
        ```
        - Url: http://localhost:8080/user/{userId}/saveDance/{danceId}
    - ```deleteDance(Integer userId, Integer danceId) -> DELETE```
        - Description: delete the specified dance of the specified user. Throw exception if user or dance is null.
        - Url: http://localhost:8080/user/{userId}/saveDance/{danceId}  

3. Formation
    - ```getAllFormations(Integer danceId, Pageable pageable) -> GET```
        - Description: get all formation of the specified dance
        - Url: http://localhost:8080/dance/{danceId}/getAllFormations
    - ```addFormation(Integer danceId, Formation formation) -> POST```
        - Description: Add one formation to the specified dance.
        - Request Body:
        ```json
        {
            "numDancers" : "5",
            "name" : "formation3",
            "duration" : "60",
            "startTime": "3:35",
            "endTime" : "4:35"
        }
        ```
    - ```saveFormation(Integer danceId, Integer formationId, Formation formationRequest) -> PUT```
        - Description: update the specified formation of the specified dance
        - Request Body:
        ```json
        {
          "numDancers" : "5",
            "name" : "formation2",
            "duration" : "60",
            "startTime": "3:35",
            "endTime" : "4:35"
        }
        ```
        - Url: http://localhost:8080/dance/{danceId}/saveFormation/{formationId}
    - ```deleteFormation(Integer danceId, Integer formationId) -> DELETE```
        - Description: delete the specified formation of the specified dance
        - Url: http://localhost:8080/dance/{danceId}/deleteFormation/{formationId}
        
4. Dancer
    - ```getAllDancers(Integer formationId, Pageable pageable) -> GET```
        - Description: load all the dancers given the formationId
        - Url: http://localhost:8080/formation/{formationId}/getAllDancers
        - Example: load all the dancers of formation with id 30
        http://localhost:8080/formation/30/getAllDancers
    - ```addDancer(Integer formationId, Dancer dancer) -> POST```
        - Description: add a dancer to the specified formation
        - Request Body:
        ```json
        {
          "name" : "C"
        }
        ```
        - Url: http://localhost:8080/formation/{formationId}/addDancer. Throw exception if formation is null.
        - Example: add a dancer to the formation with id 30
        http://localhost:8080/formation/30/addDancer
    - ```saveDancer(Integer formationId, List<Dancer> dancersRequest) -> PUT```
        - Description: save the information of all dancers to the specified formation. Throw exception if formation is null.
        - Url: http://localhost:8080/formation/{formationId}/updateAllDancers
        - Request Body:
        ```json
        [
            {
                "id" : "13",
                "name" : "A",
                "x": "0.5",
                "y":"1.1"
                
            },
            {
                "id":"14",
                "name" : "B",
                "x": "8.5",
                "y":"5.0"
                
            },
            {
                "id":"15",
                "name" : "C",
                "x": "0.5",
                "y":"1.1"
                
            },
            {
                "id":"16",
                "name" : "D",
                "x": "-6.5",
                "y":"10.1"
                
            },
            {
                "id":"17",
                "name" : "E",
                "x": "10.2",
                "y":"70.5"
                
            }
        ]
        ```
        - Example: save all dancers to the formation with id 30
        http://localhost:8080/formation/30/updateAllDancers
    - ```deleteDancer(Integer formationId, Integer dancerId) -> DELETE```
        - Description: delete the specified dancer in the specified formation. Throw exception if formation is null.
        - Url: http://localhost:8080/formation/{formationId}/deleteDancer/{dancerId}
        - Example: delete the dancer with id 10 in the formation with id 30
        http://localhost:8080/formation/30/deleteDancer/10


#### TODOs

1. Update the database:
    Variables such as numDancers should be automatically updated according to the one to many relationship between dancer and dance / dancer and formation. Front end do not need to specify the number of dancer when sending POST/PUT request
2. Encrypt the password:
    right now the password is not encrypted which is unsafe. Use Spring Security to allow more secure user account functionality.
3. ......
