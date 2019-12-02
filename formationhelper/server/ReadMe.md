## Database Schema and APIs Documentation

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
    - ```deleteUser(Integer userId) -> DELETE```: 
        - Description: delete a user with specified id
        - Url: http://localhost:8080/deleteUser/{userId}
        - Example: delete user with id 12
        http://localhost:8080/deleteUser/12

2. Dance

3. Formation

4. Dancer