document.getElementById('name').textContent = localStorage.getItem('name');

//setting conatiner to the height of inner height
container.style.height = window.innerHeight + "px";

//setting the height of the subject mains container
const mains = document.getElementById('mains');
const mainsUnder = document.getElementById('mainsUnder');
mainsUnder.style.height = window.innerHeight - document.getElementById('profile').offsetHeight + "px";

//initalizing the total percentage
let totalPercentage = [0, 0, 0];

/*first page done here*/
const yn = document.getElementById('yn');
const pr = document.getElementById('pr');
const your = document.querySelector('#your');
const requ = document.querySelector('#requ');
const next = document.querySelector('#next');

//The clickable animation on forms goes here
container.addEventListener('click', function(){
    if(document.activeElement.id == 'pr'){
        requ.style.fontSize = '0.2em';
    }
    else{
        if(pr.value.length == 0){
            requ.style.fontSize = '1.1em';
        }
    }
    if(document.activeElement.id == 'yn'){
        your.style.fontSize = '0.2em';
    }
    else{
        if(yn.value.length == 0){
            your.style.fontSize = '1.1em';
        }
    }
})

//setting the icon using functions
function addIcon() {
    document.getElementById('men').src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVDQjY2OyIgZD0iTTEzNi40OTEsMTg3LjczM3Y1MS4yYzAsMjUuNi0zNC4xMzMsNjguMjY3LTI1LjYsMTE5LjQ2N2wwLDAgIGM5NC43MTEsMjcuODE5LDE5NS40MjIsMjcuODE5LDI5MC4xMzMsMGwwLDBjOC41MzMtNTEuMi0xMi44ODUtOTMuODY3LTE3LjA2Ny0xMTkuNDY3Yy01LjY0OS00Mi40MzYtOC40OTktODUuMTg4LTguNTMzLTEyOCAgYzAtNTYuNTc2LTM3LjI5MS0xMDIuNC05My44NjctMTAyLjRoLTUxLjJjLTUxLjg0LDAtOTMuODY3LDQyLjAyNy05My44NjcsOTMuODY3QzEzNi40OTEsMTAyLjQsMTM2LjQ5MSwxODcuNzMzLDEzNi40OTEsMTg3LjczM3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y1QUQ3NjsiIGQ9Ik0yMjcuMDI5LDguNTMzYy01MC41MzQsMS43OTItOTAuNTczLDQzLjI5OC05MC41MzksOTMuODY3djEzNi41MzMgIGMwLDI1LjYtMzQuMTMzLDY4LjI2Ny0yNS42LDExOS40NjdjNDMuNjgyLDEyLjgyNiw4OC44ODMsMTkuNzk3LDEzNC40LDIwLjczNkMxNzkuMTU3LDE2Mi4xMzMsMTg3LjY5MSw2OC4yNjcsMjI3LjAyOSw4LjUzM3oiLz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkVEQUM2OyIgZD0iTTI1NS45NTcsNDUyLjI2N2MzOC42NjUtMC4wMDksNzAuODI3LTI5LjczLDczLjg5OS02OC4yNjdsMi45MDEtMzguNGwtMTguOTQ0LTIuMzg5ICAgYy04LjU4NS0xLjA4NC0xNS4wMDItOC40MTQtMTQuOTMzLTE3LjA2N1YyODEuNmgtODUuNTg5djQ0LjYyOWMwLjA2OCw4LjY1My02LjM0OSwxNS45ODMtMTQuOTMzLDE3LjA2N2wtMTkuMiwyLjMwNGwyLjkwMSwzOC40ICAgQzE4NS4xMzEsNDIyLjUzNywyMTcuMzAxLDQ1Mi4yNTgsMjU1Ljk1Nyw0NTIuMjY3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZFREFDNjsiIGQ9Ik0xNDUuMDI0LDQ0My43MzNsLTcuNzY1LTkyLjkyOGwtMTUuNjE2LDEuOTYzYy0yNS43ODgsMy4yLTQ1LjA4MiwyNS4yMTYtNDQuODg1LDUxLjJWNTEyaDQyLjY2NyAgIGMwLTIyLjE1Myw3LjE4NS00My43MTYsMjAuNDgtNjEuNDRMMTQ1LjAyNCw0NDMuNzMzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZFREFDNjsiIGQ9Ik0zOTAuMjcyLDM1Mi43NjhsLTE1LjYxNi0xLjk2M2wtNy43NjUsOTIuOTI4bDUuMTIsNi44MjdjMTMuMjk1LDE3LjcyNCwyMC40OCwzOS4yODcsMjAuNDgsNjEuNDQgICBoNDIuNjY3VjQwMy42MjdDNDM1LjE4MywzNzcuNzcxLDQxNS45MzIsMzU1Ljk2LDM5MC4yNzIsMzUyLjc2OHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojRTU2QjJFOyIgZD0iTTM2Ni44OTEsNDQzLjczM2w3Ljc2NS05Mi45MjhsLTQxLjg5OS01LjIwNWwtMi45MDEsMzguNGMtMy4zOTYsNDAuODE1LTM5LjI0NSw3MS4xNDItODAuMDUxLDY3Ljc0NiAgYy0zNi4wOTYtMy4wMDQtNjQuNzM0LTMxLjY1LTY3Ljc0Ni02Ny43NDZsLTIuOTAxLTM4LjRsLTQyLjE1NSw1LjIwNWw4LjAyMSw5Mi45MjhsLTUuMTIsNi44MjcgIGMtMTMuMjk1LDE3LjcyNC0yMC40OCwzOS4yODctMjAuNDgsNjEuNDRoMjczLjA2N2MwLTIyLjE1My03LjE4NS00My43MTYtMjAuNDgtNjEuNDRMMzY2Ljg5MSw0NDMuNzMzeiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGNUM0QjA7IiBkPSJNNzYuNzU3LDQwMi41MTd2MTA4LjM3M2gyNS42VjM1OC40Qzg2LjU4OCwzNjcuNTA1LDc2Ljg0MywzODQuMzA3LDc2Ljc1Nyw0MDIuNTE3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1QzRCMDsiIGQ9Ik0yOTguNjI0LDMyMC4zNDFWMjgxLjZoLTg1LjMzM3YzOC43NDFDMjQ1LjI5MSwzMzYuOTgxLDI2Ni42MjQsMzM2Ljk4MSwyOTguNjI0LDMyMC4zNDF6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjVDNEIwOyIgZD0iTTE1My41NTcsMTQ1LjA2N2MtMTQuMTQsMC0yNS42LDExLjQ2LTI1LjYsMjUuNmMwLDE0LjE0LDExLjQ2LDI1LjYsMjUuNiwyNS42aDE3LjA2N3YtNTEuMkgxNTMuNTU3ICAgeiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRURBQzY7IiBkPSJNMzI0LjczNiwyNjQuNTMzYy04LjI5NCw5LjYwOS0xOC40MTUsMTcuNDY4LTI5Ljc4MSwyMy4xMjVsLTE2LjEyOCw4LjEwNyAgYy0xNC4zOTYsNy4xODUtMzEuMzQzLDcuMTg1LTQ1LjczOSwwbC0xNy4wNjctOC41MzNjLTI4LjQ0Mi0xNC4xODItNDguMDA5LTQxLjU0LTUyLjIyNC03My4wNDVsLTEuNzA3LTY5LjEyVjEwMi40bDguNTMzLTguNTMzICBjMTAuNzM1LTEwLjg2MywyNS4zNTMtMTcuMDA3LDQwLjYxOS0xNy4wNjdoNjQuODUzYzM5LjU5NSwwLDM5LjU5NSwwLDQ4LjEyOCwyNS42bDAsMGMwLDAtOC41MzMsMTEwLjkzMy04LjUzMywxMjggIEMzMTYuMjcxLDI0Mi4yODcsMzE5LjM1MSwyNTMuOTE4LDMyNC43MzYsMjY0LjUzM3oiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Y1QzRCMDsiIGQ9Ik0xOTYuMjI0LDExOS40NjdjMC0xNC4xNCwxLjk1NC0yOC4yMTEsNS44MDMtNDEuODEzYy0xMS45MTMsMS45NjMtMjIuOTAzLDcuNjM3LTMxLjQwMywxNi4yMTMgIGwtOC41MzMsOC41MzN2NDIuNjY3bDEuNzkyLDY5LjEyYzMuNTU4LDI2LjEyMSwxNy42OSw0OS42MywzOS4wODMsNjUuMDI0QzE5MS42MTYsMjIzLjIzMiwxOTYuMjI0LDE1Ny4zNTUsMTk2LjIyNCwxMTkuNDY3eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDY1QjI1OyIgZD0iTTEzMC42MDMsNDY1LjU3OWMtNy4zMTMsMTQuMzc5LTExLjE0NSwzMC4yODUtMTEuMTc5LDQ2LjQyMWg1Ny4wMDMgIEMxNDYuNzMxLDQ5OS41NDEsMTM1LjA0LDQ4MC40MjcsMTMwLjYwMyw0NjUuNTc5eiIvPgo8Y2lyY2xlIGN4PSIzMDcuMTU3IiBjeT0iMTYyLjEzMyIgcj0iMTcuMDY3Ii8+CjxwYXRoIGQ9Ik0yNTMuMjYxLDIyMS40MzFsLTI1LjYtOC41MzNjLTIuMzQ3LTAuNzg1LTQuMjQxLTIuNTQzLTUuMTgtNC44M2MtMC45NDctMi4yODctMC44NTMtNC44NzMsMC4yNDctNy4wODNsMjUuNi01MS4yICBsMTUuMjY2LDcuNjM3bC0yMS4xOTcsNDIuNDAybDE2LjI2NSw1LjQxOUwyNTMuMjYxLDIyMS40MzF6Ii8+CjxwYXRoIGQ9Ik04NS4yOTEsNTEySDY4LjIyNFY0MDMuNjI3Yy0wLjIzLTMwLjI1MSwyMi4yODEtNTUuOTI3LDUyLjM2OS01OS42NjVsNzYuOC05LjU1N2M0LjI3NS0wLjUzOCw3LjQ4NC00LjIwNyw3LjQ1OC04LjUzMyAgdi0zNS43MzhoMTcuMDY3djM1LjY2OWMwLjEwMiwxMi45MTktOS41MzIsMjMuOTI3LTIyLjQsMjUuNTMybC03Ni44MDksOS41NTdjLTIxLjQ5NSwyLjY3MS0zNy41NzIsMjEuMDE4LTM3LjQxLDQyLjY2N1Y1MTJIODUuMjkxeiAgIi8+CjxwYXRoIGQ9Ik00NDMuNzc2LDUxMmgtMTcuMDY3VjQwNC4wNTNjMC4xNzEtMjEuNzE3LTE1LjkxNS00MC4wNTUtMzcuNDAyLTQyLjczNWwtNzYuOC05LjU0OSAgYy0xMi44ODUtMS42MjEtMjIuNTE5LTEyLjYyOS0yMi40MTctMjUuNnYtMzYuMDM2aDE3LjA2N3YzNi4wOTZjLTAuMDM0LDQuMzk1LDMuMTc0LDguMDU1LDcuNDY3LDguNjAybDc2Ljc4Myw5LjU0OSAgYzMwLjA4OSwzLjczOCw1Mi41OTksMjkuNDIzLDUyLjM2OSw1OS43MzNMNDQzLjc3Niw1MTJMNDQzLjc3Niw1MTJ6Ii8+CjxwYXRoIGQ9Ik0yNDUuNDAyLDI0Ny40NjdjLTAuMDA5LDAtMC4wMTcsMC0wLjAyNiwwaC02LjQ4NVYyMzAuNGg2LjQ4NWMwLjAwOSwwLDAuMDE3LDAsMC4wMjYsMGMxMS4xNywwLDIyLjM0OS0yLjYzNywzMi4zNDEtNy42MzcgIGw3LjYzNywxNS4yNjZDMjczLjAzMywyNDQuMjA3LDI1OS4yMDksMjQ3LjQ2NywyNDUuNDAyLDI0Ny40Njd6Ii8+CjxwYXRoIGQ9Ik0yNDAuMTg4LDgxLjMyM2MtNi42OS0xMC43MDktMTcuMDU4LTE4LjQ5Mi0yOS4yMS0yMS45MDVsNC42MjUtMTYuNDI3YzE2LjI0Nyw0LjU3NCwzMC4xMTQsMTQuOTc2LDM5LjA1NywyOS4yOTUgIEwyNDAuMTg4LDgxLjMyM3oiLz4KPHBhdGggZD0iTTE5OC43NDEsOTEuMzc1Yy00LjA4Ny00LjA1My0xNy4xMDktMTQuNTc1LTI4LjExNy0xNC41NzVWNTkuNzMzYzIwLjAyOCwwLDM4LjE3LDE3LjU2Miw0MC4xNjYsMTkuNTY3TDE5OC43NDEsOTEuMzc1eiIvPgo8Y2lyY2xlIGN4PSIxOTYuMjI0IiBjeT0iMTYyLjEzMyIgcj0iMTcuMDY3Ii8+CjxwYXRoIGQ9Ik0zMjUuMzUsMzAyLjg5OWMtMjMuNDE1LTQwLjk3Ny0xNi44OTYtMTAxLjY4My0xMS42NzQtMTUwLjQ2YzIuNTM0LTIzLjU5NSw0LjkyNC00NS44ODQsMi4yNzgtNTYuNTA4ICBjLTEuNTM2LTYuMTEtNC40MzctMTAuMTk3LTguODgzLTEyLjQ3NmMtOS44My01LjA3Ny0yNS42NDMtMC44MDItMzAuODkxLDEuMjcxbC02LjMyMy0xNS44NTUgIGMyLjY1NC0xLjA1OCwyNi40Ny0xMC4wNzgsNDQuOTU0LTAuNjMxYzguODU4LDQuNTMxLDE0Ljk3NiwxMi42NzIsMTcuNjksMjMuNTUyYzMuMzg4LDEzLjU1OSwxLjA3NSwzNS4xNDktMS44NTIsNjIuNDY0ICBjLTQuOTc1LDQ2LjMzNi0xMS4xNjIsMTAzLjk5Niw5LjUxNSwxNDAuMTY5TDMyNS4zNSwzMDIuODk5eiIvPgo8cG9seWdvbiBwb2ludHM9IjMyNC43NDUsMjczLjA2NyAzMjQuMjI0LDI3My4wNjcgMzI0LjIyNCwyNTYgIi8+CjxwYXRoIGQ9Ik0yNTUuOTU3LDMwOS42NDljLTkuMTY1LDAtMTguMzIxLTIuMDgyLTI2LjY2Ny02LjI0NmwtMTcuMDc1LTguNTMzYy0zMS4wMS0xNS40NjItNTIuMjY3LTQ1LjIwMS01Ni44NjYtNzkuNTQ4ICBjLTAuMDQzLTAuMzA3LTAuMDY4LTAuNjE0LTAuMDY4LTAuOTIybC0xLjcwNy02OS4xMlYxMDIuNGgxNy4wNjd2NDIuNjY3bDEuNjk4LDY4LjQzN2MzLjk2OCwyOC41NDQsMjEuNyw1My4yMjIsNDcuNTE0LDY2LjA5OSAgbDE3LjA3NSw4LjUzM2MxMS45MjEsNS45NDgsMjYuMTcyLDUuOTQ4LDM4LjExOCwwbDE2LjEwMi04LjA5OGMxMC40MTktNS4xNzEsMTkuNTQxLTEyLjI3MSwyNy4xNjItMjEuMDc3bDEyLjkxOSwxMS4xNTMgIGMtOS4wOTcsMTAuNTM5LTIwLjAxOSwxOS4wMjEtMzIuNDQ0LDI1LjE5bC0xNi4wOTQsOC4wOUMyNzQuMzA0LDMwNy41NjcsMjY1LjEyMiwzMDkuNjQ5LDI1NS45NTcsMzA5LjY0OXoiLz4KPHBhdGggZD0iTTEwMi40NzcsMzU5Ljc5OWMtNS43NDMtMzQuNDc1LDYuMjI5LTY0LjU2MywxNS44NDYtODguNzQ3YzUuMTYzLTEyLjk5Niw5LjYzNC0yNC4yMTgsOS42MzQtMzIuMTE5di01MS4yaDE3LjA2N3Y1MS4yICBjMCwxMS4xNy01LjAyNiwyMy43OTktMTAuODQ2LDM4LjQyNmMtOC44NDEsMjIuMjIxLTE5Ljg0LDQ5Ljg2LTE0Ljg3NCw3OS42NDJMMTAyLjQ3NywzNTkuNzk5eiIvPgo8cGF0aCBkPSJNNDA5LjQzOCwzNTkuNzk5bC0xNi44MzYtMi43OTljNS44NzEtMzUuMjY4LTMuMjA5LTY2LjE3Ni0xMC40OTYtOTAuOTk5Yy0yLjg2Ny05Ljc1NC01LjM0Mi0xOC4xNjctNi41NzktMjUuNjk0ICBjLTUuNjkyLTQyLjg5Ny04LjU5My04Ni4zNC04LjYzNi0xMjkuMzY1YzAtNTQuNC0zNS44OTEtOTMuODc1LTg1LjMzMy05My44NzVoLTUxLjJjLTQ5LjQ0MiwwLTg1LjMzMywzOS40NzUtODUuMzMzLDkzLjg2N1YxNTMuNiAgaC0xNy4wNjd2LTQyLjY2N0MxMjcuOTU3LDQ2LjY1MiwxNzEuMDI1LDAsMjMwLjM1NywwaDUxLjJjNTkuMzMyLDAsMTAyLjQsNDYuNjUyLDEwMi40LDExMC45MzMgIGMwLjA0Myw0Mi4yODMsMi44ODQsODQuOTY2LDguNDU3LDEyNi44NzRjMS4wMjQsNi4yMjksMy4zNjIsMTQuMTc0LDYuMDU5LDIzLjM3M0M0MDUuODYyLDI4Ni4yOTMsNDE1Ljk2NiwzMjAuNjc0LDQwOS40MzgsMzU5Ljc5OXogICIvPgo8cGF0aCBkPSJNMTYyLjA5MSwyMDQuOGgtOC41MzNjLTE4LjgyNSwwLTM0LjEzMy0xNS4zMDktMzQuMTMzLTM0LjEzM3MxNS4zMDktMzQuMTMzLDM0LjEzMy0zNC4xMzNoOC41MzNWMTUzLjZoLTguNTMzICBjLTkuNDEyLDAtMTcuMDY3LDcuNjU0LTE3LjA2NywxNy4wNjdjMCw5LjQxMiw3LjY1NCwxNy4wNjcsMTcuMDY3LDE3LjA2N2g4LjUzM1YyMDQuOHoiLz4KPHBhdGggZD0iTTI1NS45NTcsNDYwLjhjLTQyLjgxMi0wLjAwOS03OS4wMS0zMy40NTEtODIuNDA2LTc2LjEyNmwtMi45MDEtMzQuMDgybDE3LjAwNy0xLjQ1MWwyLjkwMSwzNC4xMzMgIGMyLjY5NywzMy45MiwzMS40Miw2MC40NSw2NS4zOTEsNjAuNDU5YzMzLjk3MS0wLjAwOSw2Mi43MDMtMjYuNTM5LDY1LjM5MS02MC40MDdsMi45MS0zNC4xODVsMTYuOTk4LDEuNDUxbC0yLjkwMSwzNC4xMzMgIEMzMzQuOTY3LDQyNy4zNDksMjk4Ljc3OCw0NjAuNzkyLDI1NS45NTcsNDYwLjh6Ii8+CjxwYXRoIGQ9Ik0xMjcuOTU3LDUxMmgtMTcuMDY3YzAtMjMuODUxLDcuODc2LTQ3LjQ3OSwyMi4xOTUtNjYuNTZsMy4xMjMtNC4xNjRMMTI4LDM1OS4yNTNsMTYuOTgxLTEuNjk4bDguNTMzLDg1LjMzMyAgYzAuMjEzLDIuMTI1LTAuMzg0LDQuMjU4LTEuNjY0LDUuOTY1bC01LjEyLDYuODI3QzEzNC42MjIsNDcxLjgxNywxMjcuOTU3LDQ5MS44MjcsMTI3Ljk1Nyw1MTJ6Ii8+CjxwYXRoIGQ9Ik00MDEuMDI0LDUxMmgtMTcuMDY3YzAtMjAuMTgxLTYuNjY1LTQwLjE4My0xOC43NjUtNTYuMzI4bC01LjEyOS02LjgxOGMtMS4yOC0xLjcxNS0xLjg3Ny0zLjg0LTEuNjY0LTUuOTczbDguNTMzLTg1LjMzMyAgbDE2Ljk4MSwxLjY5OGwtOC4yMDEsODIuMDE0bDMuMTIzLDQuMTY0QzM5My4xNDgsNDY0LjUyMSw0MDEuMDI0LDQ4OC4xNDksNDAxLjAyNCw1MTJ6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
}

//setting icon using local storage
if(localStorage.getItem('icon') == 'female') {
    addIcon();
}

//setting total to zero
document.getElementById('total').style.opacity = "0";

//button for next page
next.addEventListener('click', function(e){
    if(pr.value.length > 0 && yn.value.length >0){
        container.style.left = "-100vw";
        
        //taking name and percentage required
        localStorage.setItem('name',yn.value);
        localStorage.setItem('prequ',pr.value)
        //document.getElementById('name').textContent = localStorage.getItem('name');
        //document.getElementById('total').textContent = "total: " + localStorage.getItem('prequ') + "%";
        
        //checking radio buttons for input and changing the icon as per male or female
        if(document.getElementById('man').checked == false){
            console.log('female');
            localStorage.setItem('icon','female');
            console.log(localStorage.getItem('icon'));
            addIcon();
        }
        location.reload();
    }
})

/*add subject*/

const add = document.getElementById('add');
const popAdd = document.getElementById('popAdd');
const close = document.getElementById('close');
const adds = document.getElementById('adds');
const addsInput = document.getElementById('addsInput');

add.addEventListener('click', function(){
    popAdd.style.transform = "scale(1)";
})

function closePop(){
    popAdd.style.transform = "scale(0)";
}

//closing when close is clicked
close.addEventListener('click', closePop);

//constructor function for subjects
function subject(name){
    this.name = name;
    this.total = 0;
    this.present = 0;
}
subject.prototype.setName = function(value) { localStorage.setItem(value,this.name) }
subject.prototype.getName = function() { return this.name };
subject.prototype.incrementa = function(value) { this.total++;
                                               localStorage.setItem(value, this.total); };
subject.prototype.incrementp = function(value1, value2) { this.present++;
                                          this.total++;
                                          localStorage.setItem(value1, this.total);
                                          localStorage.setItem(value2, this.present); };
subject.prototype.getTotal = function() { return this.total };
subject.prototype.getPresent = function() { return this.present };
subject.prototype.settp = function(value1, value2) { this.total = value1;
                                                   this.present = value2; };
//function ends here with prototype

//creating array and initializing as objects and using for counter variable to access them
let subjects = [];
let counter = 0;
if(localStorage.getItem('counter') == null || localStorage.getItem('counter') == 0){
    counter = 0;
} else {
    counter = localStorage.getItem('counter');
}

//for calculating percentage of subjects
function calculatep(total, present) {
    let inpercent = 0;
    if(present != 0 && total != 0){
        inpercent = present / total * 100;
        inpercent = Math.ceil(inpercent);
    } else if(total != 0) {
        inpercent = 0;
    } else {
        inpercent = 100;
    }
    
    //setting the color of the corrseponding percent
    let pchanger = localStorage.getItem('prequ');
    if(inpercent >= pchanger){
        return [inpercent, "green" , "You are safe!"];
    } else {
        return [inpercent, "red", "No Bunks now!"];
    }
}

//adding the subject when add button is clicked
adds.addEventListener('click', function() {
    //validating for xss attacks
    let validate = addsInput.value;
    let validator = validate.split("<");
    
    if(addsInput.value.length > 0 && validator.length == 1){
        subjects.push(addsInput.value);
        subjects[counter] = new subject(addsInput.value);
        closePop();                                         //close pop after adding
        
        //creating the subjects keeper element
        let subject1r = document.createElement('div');
        subject1r.setAttribute('class','first');
        mains.appendChild(subject1r);                       //apending to main keepper of subjects
        subjects[counter].setName('sname');          //setting the name to local Storage
        
        //setting all atributes to make it ready of subjects
        let inpercent = '100%';
        let sprensent = subjects[counter].getPresent();
        let stotal = subjects[counter].getTotal();
        let sname = subjects[counter].getName();
        inpercent = calculatep(stotal, sprensent);
        
        //setting the total percentage
        totalPercentage[0] += inpercent[0];
        totalPercentage[1]++;
        totalPercentage[2] = totalPercentage[0] / totalPercentage[1];
        document.getElementById('total').textContent = totalPercentage[2] + "%";
        
        //setting localStorage
        let suname = sname;
        let sunameAdd = suname;
        if(localStorage.getItem('allsu') != null && localStorage.getItem('allsu') != " "){
            sunameAdd = localStorage.getItem('allsu') + " " + sunameAdd;
            localStorage.setItem('allsu', sunameAdd);
        } else{
            localStorage.setItem('allsu', sname);
        }
        console.log(localStorage.getItem('allsu'));
        let supresent = sname + "p";
        let sutotal = sname + "t";
        subjects[counter].setName(suname);
        localStorage.setItem(supresent, sprensent);
        localStorage.setItem(sutotal, stotal);
        
        subject1r.innerHTML = '<span class="head">' + sname + '</span><span class="sper" style="color:' + inpercent[1] + ';">' + inpercent[0] + '%</span><div class="data"><span class="clear">' + inpercent[2] + '</span><span class="stats">Attended ' + sprensent + ' of ' + stotal + '</span></div>';
        
        //setting the input null 
        addsInput.value = "";
        
        //setting the counter of call
        counter++;
        localStorage.setItem('counter', counter);
        
        
        //refreshing page
        location.reload();
    } else if(validator.length > 1){
        alert("Do not try xss attack again or i will call police!")
    }
})

//adding subject which were added before
let gsubjects = [];
if(counter > 0){
    
    //setting total
    document.getElementById('total').style.opacity = "1";
    
    let array = localStorage.getItem('allsu');
    array = array.split(" ");
    console.log(array);
    
    for(let i=0; i < counter; i++){
        //setting the names of variables needed
        let inpercent = "100%";
        let gname = array[i];
        console.log(array[i]);
        let gpresent = array[i] + "p";
        let gtotal = array[i] + "t";
        
        //setting the objects
        gsubjects[i] = new subject(gname);
        gsubjects[i].settp(localStorage.getItem(gtotal), localStorage.getItem(gpresent));
        
        //calculating percentages of subjects
        let uTotal = gsubjects[i].getTotal();
        let uPresent  = gsubjects[i].getPresent();
        inpercent = calculatep(uTotal, uPresent);
        
        //setting the total percentage
        totalPercentage[0] += inpercent[0];
        totalPercentage[1]++;
        totalPercentage[2] = totalPercentage[0] / totalPercentage[1];
        totalPercentage[2] = Math.ceil(totalPercentage[2]);
        document.getElementById('total').textContent = "Total: " + totalPercentage[2] + "%";
        
        //creating and entering elements        
        let subject5 = document.createElement('div');
        subject5.setAttribute('class','first');
        mains.appendChild(subject5);
        subject5.innerHTML = '<span class="head">' + gname + '</span><span class="sper" style="color:' + inpercent[1] + ';">' + inpercent[0] + '%</span><div class="data"><span class="clear">' + inpercent[2] + '</span><span class="stats">Attended ' + uPresent + ' of ' + uTotal + '</span></div>';
    }
}

document.querySelector('.refresh').addEventListener('click', function() {
    localStorage.clear();
    location.reload();
})

//attendece taking
const apresent = document.getElementById('present');
const aabsent = document.getElementById('absent');
mains.addEventListener('click', function(e) {
    if(e.target.className == "head"){
        
        let j = 0;
        let aname = "";
        while(gsubjects[j] != undefined){
            aname = gsubjects[j].getName();
            if(e.target.textContent == aname){
                //setting the absent and present
                let absent = aname + "t";
                let present = aname + "p";
                
                //creating and adding attendence taker
                let aTaker = document.getElementById("popAttendence");
                let aTakerP = document.getElementById("present");
                let aTakerA = document.getElementById("absent");
                aTakerP.addEventListener('click', function() {
                    gsubjects[j].incrementp(absent, present);
                    aTaker.style.transform = "scale(0)";
                    location.reload();
                })
                aTakerA.addEventListener('click', function() {
                    gsubjects[j].incrementa(absent);
                    aTaker.style.transform = "scale(0)";
                    location.reload();
                })
                aTaker.style.transform = "scale(1)";
                break;
            }
            j++;
        }
    }
})
//closing attendance popup when cross is clicked
const closeAttendance= document.getElementById("closeAttendance");
const aTaker = document.getElementById("popAttendence");
closeAttendance.addEventListener('click',function(){
    aTaker.style.transform = "scale(0)";
})

//#df5000 #5943AA #FF7C35 #E31D65 #E31D65 #2EAD6D #008597 #FFCB36