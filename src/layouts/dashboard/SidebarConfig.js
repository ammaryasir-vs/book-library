import { Icon } from '@iconify/react';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import bxsBook from '@iconify/icons-eva/book-fill';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'BOOKS',
    path: '/books',
    icon: getIcon(bxsBook)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
