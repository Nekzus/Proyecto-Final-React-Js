import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import NavContainer from '../NavContainer/NavContainer';
import Loading from '../Common/Loading';
import { useFetchItemListContainer } from '../../hooks/useFetchItemListContainer';

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, loading] = useFetchItemListContainer(id);

    useEffect(() => {
        console.log('Render itemlistcontainer'); //TODO: remove
    });

    return (
        <main>
            <div className='container'>
                <NavContainer />
                {loading ? <div className='container text-center'>{<Loading />}</div> : <ItemList items={items} />}
            </div>
        </main>
    )
};
export default ItemListContainer;
