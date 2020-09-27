import { useState } from 'react';
import { getFirestore, firebase } from './';

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
      return err;
    }
  };

  const getOneItem = async id => {
    try {
      const db = getFirestore();
      const item = db
        .collection('items')
        .where(firebase.firestore.FieldPath.documentId(), '==', id);
      const querySnapshot = await item.get();

      const theOneItem = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))[0];

      if (!theOneItem) {
        setItem(null);
        setFetching(false);
      } else {
        setItem(theOneItem);
        setFetching(false);
      }
    } catch (err) {
      console.log('useFirebase -> err', err);
    }
  };

  const createOrder = async (articles, totalPrice, buyerInfo) => {
    const db = getFirestore();
    const orders = db.collection('orders');

    const cartItems = articles.map(article => ({
      id: article.id,
      quantity: article.amount,
    }));

    const { email, name, phone } = buyerInfo;

    const newOrder = {
      buyer: {
        email,
        name,
        phone,
      },
      items: cartItems,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      subtotal: totalPrice,
      state: 'Placed',
    };
    try {
      const { id } = await orders.add(newOrder);
      return id;
    } catch (err) {
      console.log('createOrder -> err', err);
    }
  };

  return {
    items,
    item,
    fetching,
    getAllItems,
    getItemsByGenre,
    getOneItem,
    createOrder,
  };
};
