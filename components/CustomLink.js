import Link from 'next/link';
import { IconBase } from 'react-icons';

const CustomLink = ({ className = '', icon = IconBase, title, href }) => {
  return (
    <Link href={href} className={className}>
      <IconBase />
      {title}
    </Link>
  );
};

export default CustomLink;
