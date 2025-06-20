import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { addToCart, clearCart } from '../redux/slices/cartSlice';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

export default function ShopScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);
  const [isCartVisible, setCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Audio Shop</Text>
        <TouchableOpacity onPress={() => setCartVisible(true)}>
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToCart={handleAddToCart} />
        )}
      />

      {/* Cart Modal */}
      <Modal isVisible={isCartVisible} onBackdropPress={() => setCartVisible(false)}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>🛒 Your Cart</Text>
          {cartItems.length === 0 ? (
            <Text style={styles.empty}>Cart is empty.</Text>
          ) : (
            <>
              {cartItems.map((item) => (
                <Text key={item.id} style={styles.item}>
                  {item.name} x{item.quantity}
                </Text>
              ))}
              <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.checkout}
                onPress={() => {
                  setCartVisible(false);
                  dispatch(clearCart());
                  navigation.navigate('Checkout');
                }}
              >
                <Text style={styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  modal: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: { color: '#ccc', fontSize: 16, marginBottom: 4 },
  empty: { color: '#777', fontSize: 16, textAlign: 'center', padding: 20 },
  total: { color: '#fff', fontSize: 16, marginTop: 10 },
  checkout: {
    marginTop: 12,
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
  },
  checkoutText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
