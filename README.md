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

### Weekly documentation
Week 0(Jun 23): Framework/Library decided. Building foundations

Week 1(Jun 30): Studied for basic React stuff. Worked on the detailed plan.


## Ideas and Meeting notes
28号meeting主要内容
1. 先给大家介绍一下具体的app，不知道大家那两个视频都看了没有
    1. market research cyh
        1. 一段音乐的快慢
        2. 体操、健美操用的 8个formation 用siri来控制 投在大屏幕上 缺点是不能加音乐 也不知道每一个人 只有一个个formation的名字 没有点 不知道具体谁站在那里 适合排过队形复习的
        3. Playbook 平面图 加点上去 还可以署名 可以拖动 但是不能通过Siri控制 只能手一个个点 但是没有音乐 不知道哪里换队形 不是三维的 不知道什么时候蹲下
        4. Pinterest上舞蹈博主会collect formation
        5. 首先必须要有点；做成三维；最好能加上音乐；最好能署名
2. 具体的平台用的会是React 抽查一下有没有人知道react 介绍一下具体的差别
3. 发表一下任务 主要的任务：在GitHub跟大家分享了之后 自己拉一个branch 然后在新的branch里
    1. 可以打开最初始的内容
    2. 进行一些稍微的改动之后commit到自己的branch里面
    3. 里面readme写的内容几乎都过期了所以不需要看也可以
4. 这些任务希望在下周之前可以完成 越快越好 如果进行的改动越特别越好 

7.5 meeting
Current Idea:
Stage One - Non Moving Formations
1. Welcome Interface
    1. Currently only adding the buttons, they don’t need to lead to anywhere (but we need the Create New button to lead to the Main Page for easier future testings)
    2. Main buttons
        1. Create New
        2. Load Local
        3. Download Online
        4. Credits
    3. It’s important to recognize that in the future there should be a leading page for the user to input the number of dancers and names/colors of these dancer dots. 
2. Main Page(See Example)
![Example](images/Example.jpg)
    1. Side Menu (left): activate by hovering to the very left or by clicking the top left button, which disappears when the menu is activated, but reappears when the menu is no longer available; this menu is mainly in charge of main actions
        1. Show/Hide Music(Content changes with the condition of Top popup) 
        2. Show/Hide Pages(Content changes with the condition of Bottom popup)
        3. Change Dance Name
        4. Change Dancer Number
    2. Side Menu (right): activate by hovering to the very right or by clicking the top right button, which disappears when the menu is activated, but reappears when the menu is no longer available.; this menu is mainly in charge of actions related to the particular formation for this page
        1. Default formations
        2. Copy previous formation
        3. Change dots information (You can change the name/color of all the dots - dots all have a number to them)
        4. Settings
            1. Reverse front stage/backstage order
            2. Change stage size
    3. Top popup (Appears after the Show Music button is clicked)
    4. Bottom popup (Appears by default; showing the current page and total pages)
        1. You can change the page you are looking at
        2. There’s a + button at the end of all pages that you can click to create a new formation
        3. Click and drag on a certain page can move its position
    5. Main Page adjustment to current formation
        1. It should have front stage backstage listed; which can be changed by settings
        2. There should be an onstage offstage area (Dots/Dancers that are not onstage should not be deleted, instead they are either in the onstage area or offstage area)
        3. Click and drag on a current dot in order to change its position
        4. Double click on a dot to change its name and/or color
3. Credits Page
    1. A single page that lists all the contributors’ names, any references if we have in the future, and GitHub repository’s link

Current Task for 7.12.
1. (Yuhan Chen) Welcome Interface and 4 buttons
    1. If this task is done, work on the page that follows Create New, where users are asked to input dance name; dancers number
2. Main Page two side menus (buttons not required; but the ability of being activated by hovering & the side button is required as well as the deactivation of these menus)
    1. If this task is done, work on the buttons listed above
    2. If 2.1 is done, work on activation of top and bottom popup; important to know that the top and bottom popup should be behind the left and right side menus when coexists.
3. Main Page onstage/offstage; Front stage/Backstage exhibition
    1. If this task is done, work on the link between Credits to the Credits Page
4. (Yuxiang Chen) Create New first Page (the page after Create New button is clicked and happens before Main Page to gather information)
    1. number of dancers
    2. the name of dance
    3. *load music

7.12 Meeting

1. Discuss on some slight adjustment

To do list:
1. Router - page Shift
2. Slight Css changes
    1. Welcome page doesn't AppHeader
    2. Other pages can have an AppHeader - but only with a Title and a going back button (going back to the WelcomePage)
    3. Button sizes and canvas default size should be stable in MainPage
3. Formation Canvas development - the construction (Write UML for the model)
4. Knowing how to load music


Meeting for 7.19
Tasks:
1. Main Page styles changes
    1. Two buttons 一左一右 (rock)
    2. Buttons 不应该占一条 而应该浮在页面上面 (rock)
    3. 页面中间的几个Label应该有固定大小 Stage和off Stage方块的区域，很大一块地方+中间会有字体标注，Front和Back可以是一条，不是一块区域 (cyh)
    4. Drawer打开是黑色的好丑哦 (cyx)
2. Formation Dots
    1. 在Stage和Off Stage的区域里有浅灰色的grid可以把dot放在上面(cyh)
    2. 有Dot的class 里面存储一些dot的information - position，dancer name，color (yxy)
    3. 在Welcome Page点进Create New的时候，应该有popup 需要录入一些基本资料，比如说Dance Name，Dancer Number， Load Music (yxy)
3. Main Page 两个Button的功能
    1. Load Music (cyx)
    2. Change Dance Name/Dancer Number
    3. Change dots information

## To do list (deprecated)
- Have a basic app that has nothing but a first page (start a new project; load from cloud; )
- The app can have different pages to go to during formation change
- Draw the basic UI that has no functions (A side bar with buttons and infos for the dancers; there will be on stage and off stage areas, if dots are deleted, they will never be on stage; grids; stage front stage back - able to change)
- Able to draw plain dots on the pages with numbers and when you go to the next page, the initial position of the dot will be what it was in the previous page
- Dragging on a dot can change its position
- Able to delete dots (Offstages dots are not deleted)
- Able to change the color of dots (that are consistent over the course)
- Able to name the dots (that are consistent over the course)
- Able to hide the names of the dots
- Able to have teacher view vs. student view (student view make the self dot much bigger and brighter)
- View mode vs. edit mode
- double click on a dot can change its position (standing vs sitting vs lying down)
- have music sequence playing at the top of the space and guide formation change (i.e. sequence during which time are for this formation) 
- during the changing time, the dots can find their routes to the next formation
- have access to a website page to watch the video in order to have the formation (this maybe not very necessary)
- default formation choice
- have different stage sizes
- upload to cloud and share among teammates
- upload to cloud and share with other ppl (with token)
- click on dots and change their positions together (or circle)

Side bar buttons
- a button to guide to changes to the dots
- a button to guide to music play
- video play -> websites
- choose default basic formations

