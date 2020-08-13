let appMenu =[
  {
    _name: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/',
    icon: 'cil-speedometer',
  },{
    _name: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: 'cil-speedometer',
  },
];


export default [
  {
    _name: 'CSidebarNav',
    _children: appMenu
  }
]
