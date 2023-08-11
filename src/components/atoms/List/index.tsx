import { ReactNode } from 'react';
import { ListSyled } from './styles';


interface ListProps {
    children: ReactNode
}

const List = ({children}: ListProps) => {
  return (
    <ListSyled>
        {children}
    </ListSyled>
  );
}

export default List;