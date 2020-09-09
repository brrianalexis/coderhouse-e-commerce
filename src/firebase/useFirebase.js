import { useState } from 'react';
import { getFirestore } from './';

export const useFirebase = () => {
  const [items, setItems] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [item, setItem] = useState();

  const getAllItems = async () => {
    try {
      const db = getFirestore();
      const collection = db.collection('items');
      const querySnapshot = await collection.get();

      const items = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      setItems(items);
      setFetching(false);
    } catch (err) {
      console.log('getAllItems -> err');
      console.log('%c%s', 'color: #00e600', err);
      return err;
    }
  };

  const getItemsByGenre = async genre => {
    try {
      const db = getFirestore();
      const collection = db.collection('items');
      const genreItems = collection.where('genre', '==', genre);
      const querySnapshot = await genreItems.get();

      const items = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      setItems(items);
      setFetching(false);
    } catch (err) {
      console.log('getItemsByGenre -> err');
      console.log('%c%s', 'color: #ff0000', err);
      return err;
    }
  };

  const getOneItem = async title => {
    try {
      const db = getFirestore();
      const item = db.collection('items').where('albumTitle', '==', title);
      const querySnapshot = await item.get();

      const theOneItem = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))[0];

      setItem(theOneItem);
      setFetching(false);
    } catch (err) {
      console.log('getOneItem -> err');
      console.log('%c%s', 'color: #00a3cc', err);
    }
  };

  return { items, item, fetching, getAllItems, getItemsByGenre, getOneItem };
};
