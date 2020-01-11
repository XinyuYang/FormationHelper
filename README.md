# FormationHelper
This app aims at helping dancers to read and share dance formations.

## Background
Something something

## Features
Something will be put here when I actually have stuff

## Developmental work
We are currently working on the teacher side of the app. According to the survey we handed out, most teachers use laptop. Under this consideration, we decided to first build a web app.
### Using React
Some references
React vs Vue: https://www.monterail.com/blog/vue-vs-react-2019

React vs Angular: https://programmingwithmosh.com/react/react-vs-angular/

React tutorial: https://reactjs.org/docs/getting-started.html

## Task for this week
Last week's task:
1. Code Refractory
    1. 删除不需要的文件和readme等，最后剩下一个folder是前端一个folder是后端，一个readme
    2. 临时的文件应该都gitignore，比如 .idea
2. 前端后端连接
    1. doc里面的端口都可以调用
3. 前端的分页功能
4. 数据在云端的存储，把数据迁移到云端数据库 // deploy之后一并打包到云端？

Upcoming Week:
0. Pagination.
1. Slight modifications on server-side:
    1. User: how to get userId for deletion? Is it generated when adding a user? Should we provide it randomly from the frontend?
    
        **The User might not be a good choice for login purpose. Since we might have teacher account and student account, we might want to use more complicated Spring module such as Spring Security to implement the login purpose. Fix this later!**

    2. Dance & Formation: the usage for the two classes seems a little redundant. 
        
        - **I feel like the relationship between Formation and Dance is similar to the pages in a book. A Dance might have several formations, each individual formation will have its own properties such as d**
        - Not sure some of the properties related to music should belong to formation or dance => depends on the implementation logic of pagination based on music time from the front end (What should the backend provide to enable pingination => need clarification)
        
    3. We need to store the coordinates for all dancers in all pages at the server. We may not need a Dancer class, because we only want to send the request once - when the user click on the save dance button on the screen. So eventually we may only need one user class and one dance class. UserId may not be needed in fetching dances, because if in the future, we want the user to be able to find other people's dances, it would be nice that they can browse all available dances on the server. However, we do want to keep the current method of getting all dancers by userId as well. In the Dance class, these info should be stored:
        1. Dance name
        2. Music
           {
             "music": "fakingUrl",   #Assuming that current way of using music is by Url.
             "gaps": ["0:30", "0.50"]  #The gaps of the page changes. This can be finalized when pagination is done.   
           }
        3. Dancer(s)
            [{"name":"A",    #Keep the functionality that user can change dancer name.
              "color": "red",    #Functionality that dancer(dots) can have different color for differentiation.
              "formation": ["(1.0, 0.0), (2.0, 0.0), (3.0, 0.0)"],    #A list of formations at each pages.
            },
            {"name": "B",
             "color": "blue",
             "formation": ["(0.0, 0.0), (0.0, 0.0), (0.0, 0.0)"],
            }]
           The formation part is just a simple design as an example. There should be a better and cleaner way of doing this. We may need to modify and to see how to make sure the page number and gaps in Music and number of elements in formation list in Dancer are all the same. This should be done at the front end before passing in the data, so currently we are not checking it here.
        
        Comments:
        - The above database design does not fit the relational MySQL database => it can be used in MongoDB/Google Reatime Database (Key-Value storage)
        - I think the current database works well for the problem mentioned above => only need  to implement a few more methods listed below:
            1. PUT: updateAllFormation(Integer danceId);
                *This will save update/save all the formation inside one dance at once.*
            2. GET: getAllDance();
                *This will get allDances from the database in a Pageable form that is sorted by alphabetical order*
                *Allowing the feature to browse all formations from the site*
        - Should we provide the feature to allow the user to save each individual formation? Is that helpful at all? When we implement auto-save feature in the future, should we auto-save individual formation or all formation inside a dance?
2. Hook up front end and server side once the 1. is done.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
1. Cloud side setup
    1. Create cloud side account
    2. Figure out how to hook it up with mysql server
2. Security and authentication
    1. Investigate on authentication
    2. Encrypt server side user password. (Use Spring Security)
3. Frontend UI improvement
    1. Login page: Provide better UI, more artistic.
    2. Add a button called Save Formation in MainPage. When this button is pressed, frontend will send a requestand update/add the current formation to the server.
4. Music & Pagination
    1. User can "cut" music by adding a line to seperate Formation A and Formation B. This cutting time would be kept in server. (In the future, we may switch to using two lines instead of one to have the formation change time)
    2. When the music plays and passes the line, current canvas automatically switched to the next page of formation. (Combining with Pagination).
5. Update readme and cleanup code.
