let appMenu =[
  {
    _name: 'CSidebarNavItem',
    name: 'Approval',
    to: '/approval',
    icon: 'cil-pencil',
  },
];

if (USER.type == 1 || USER.type == 0) {
  appMenu.push(
    {
      _name: 'CSidebarNavItem',
      name: 'Home',
      to: '/',
      icon: 'cil-speedometer',
    },
  {
    _name: 'CSidebarNavItem',
    name: 'Disposition',
    to: '/disposition',
    icon: 'cil-share-boxed',
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Contract',
    to: '/contract',
    icon: 'cil-file',
  },
  {
    _name: 'CSidebarNavItem',
    name: 'Recycle Bin',
    to: '/recycle-bin',
    icon: 'cil-trash',
  })
}


if (USER.type == 1) {
  appMenu.push(
    {
      _name: 'CSidebarNavItem',
      name: 'Partner',
      to: '/partner',
      icon: 'cil-industry',
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Unit',
      to: '/unit',
      icon: 'cil-sitemap',
    },
    {
      _name: 'CSidebarNavItem',
      name: 'User',
      to: '/user',
      icon: 'cil-people',
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Log',
      to: '/log',
      icon: 'cil-bell',
    }
  );
}

export default [
  {
    _name: 'CSidebarNav',
    _children: appMenu
  }
]
