module.exports = {
    "title": "SEM",
    "root": "",
    "keyword": "deploy, frontend",
    "description": "description",
    "menulist": [
      {
        "title": "系统设置",
        "icon": "fa-gear",
        "active": true,
        "url": "index.html",
        "istree":true,
        "tips": {},
        "sub": [
            {
                "url": "setting/department/index.html",
                "title": "部门管理"
            },
            {
                "url": "setting/user/index.html",
                "title": "用户管理"
            },
            {
              "url": "#",
              "title": "角色管理"
            }
        ]
      },
      {
        "title": "Widgets",
        "icon": "fa-th",
        "active": false,
        "url": "widgets.html",
        "istree":false,
        "tips": {"icon":"bg-green","title":"new"},
        "sub": []
      },
      {
        "title": "Charts",
        "icon": "fa-bar-chart-o",
        "active": false,
        "url": "#",
        "istree":true,
        "tips": {},
        "sub": [
            {
                "url": "chart-morris.html",
                "title": "Morris"
            },
            {
                "url": "chart-flot.html",
                "title": "Flot"
            },
            {
                "url": "chart-inline.html",
                "title": "Inline charts"
            }
        ]
      },
      {
        "title": "UI Elements",
        "icon": "fa-laptop",
        "active": false,
        "url": "#",
        "istree":true,
        "tips": {},
        "sub": [
            {
                "url": "ui-general.html",
                "title": "General"
            },
            {
                "url": "ui-icons.html",
                "title": "Icons"
            },
            {
                "url": "ui-buttons.html",
                "title": "Buttons"
            },
            {
                "url": "ui-sliders.html",
                "title": "Sliders"
            },
            {
                "url": "ui-timeline.html",
                "title": "Timeline"
            }
        ]
      },
      {
        "title": "Forms",
        "icon": "fa-edit",
        "active": false,
        "url": "#",
        "istree":true,
        "tips": {},
        "sub": [
            {
                "url": "form-general.html",
                "title": "General Elements"
            },
            {
                "url": "form-advanced.html",
                "title": "Advanced Elements"
            },
            {
                "url": "form-editors.html",
                "title": "Editors"
            }
        ]
      },
      {
        "title": "Tables",
        "icon": "fa-table",
        "active": false,
        "url": "#",
        "istree":true,
        "tips": {},
        "sub": [
            {
                "url": "table-simple.html",
                "title": "Simple tables"
            },
            {
                "url": "table-data.html",
                "title": "Data tables"
            }
        ]
      },
      {
        "title": "Calendar",
        "icon": "fa-calendar",
        "active": false,
        "url": "calendar.html",
        "istree":false,
        "tips": {"icon":"bg-red","title":"3"},
        "sub": []
      },
      {
        "title": "Mailbox",
        "icon": "fa-envelope",
        "active": false,
        "url": "mailbox.html",
        "istree":false,
        "tips": {"icon":"bg-yellow","title":"13"},
        "sub": []
      },
      {
        "title": "Examples",
        "icon": "fa-folder",
        "active": false,
        "url": "#",
        "istree":true,
        "tips": {},
        "sub": [
            {
                "url": "example-invoice.html",
                "title": "Invoice"
            },
            {
                "url": "example-login.html",
                "title": "Login"
            },
            {
                "url": "example-register.html",
                "title": "Register"
            },
            {
                "url": "example-lockscreen.html",
                "title": "Lockscreen"
            },
            {
                "url": "example-404.html",
                "title": "404 Error"
            },
            {
                "url": "example-500.html",
                "title": "500 Error"
            },
            {
                "url": "example-blank.html",
                "title": "Blank Page"
            }
        ]
      }
    ]
}
