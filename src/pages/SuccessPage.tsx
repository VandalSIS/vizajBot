import React, { useState, useEffect } from 'react';
import { CheckCircle, Package, Truck, Home, ShoppingBag } from 'lucide-react';
import MetaPixel, { trackPurchase } from '../components/MetaPixel';
import { getPixelId, isMetaPixelConfigured } from '../config/metaPixel';
import { trackPurchase as trackGAPurchase, trackUTMParameters } from '../components/GoogleAnalytics';

const SuccessPage: React.FC = () => {
  const [orderId, setOrderId] = useState<string>('');
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    // Get order ID from URL parameters (supporting both formats)
    const urlParams = new URLSearchParams(window.location.search);
    const orderParam = urlParams.get('order') || urlParams.get('orderId');
    
    if (orderParam) {
      setOrderId(orderParam);
      
      // Get order details from localStorage
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const foundOrder = orders.find((o: any) => o.id === orderParam);
      if (foundOrder) {
        setOrder(foundOrder);
        
        // Track purchase conversion for Meta Ads (if configured)
        if (isMetaPixelConfigured()) {
          trackPurchase(foundOrder.total, 'MDL', foundOrder.id);
        }
        
        // Track purchase for Google Analytics
        trackGAPurchase(foundOrder.id, foundOrder.total, 'MDL', foundOrder.items);
        
        // Track UTM parameters
        trackUTMParameters();
      }
    } else {
      // If no order parameter in URL, get the most recent order
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      if (orders.length > 0) {
        const latestOrder = orders[orders.length - 1];
        setOrderId(latestOrder.id);
        setOrder(latestOrder);
        
        // Track purchase conversion for Meta Ads (if configured)
        if (isMetaPixelConfigured()) {
          trackPurchase(latestOrder.total, 'MDL', latestOrder.id);
        }
        
        // Track purchase for Google Analytics
        trackGAPurchase(latestOrder.id, latestOrder.total, 'MDL', latestOrder.items);
        
        // Track UTM parameters
        trackUTMParameters();
      }
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Meta Pixel for tracking */}
      <MetaPixel pixelId={getPixelId()} />
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {order ? `Order Success №${order.orderNumber || order.id.slice(-4)}` : 'Comanda finalizată cu succes!'}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Mulțumim pentru comandă!
            </h2>
            <p className="text-gray-600 mb-4">
              Comanda dvs. a fost procesată cu succes și va fi livrată în cel mai scurt timp.
            </p>
            {orderId && (
              <p className="text-sm text-gray-500">
                Numărul comenzii: <span className="font-mono font-medium">{orderId}</span>
              </p>
            )}
          </div>

          {/* Order Details */}
          {order && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Detalii comandă
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data comenzii:</span>
                    <span className="font-medium">{formatDate(order.date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numărul comenzii:</span>
                    <span className="font-mono font-medium">{order.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-semibold text-lg">{order.total} MDL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600 font-medium">Confirmată</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Informații client:</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-600">Nume:</span> {order.customer.firstName} {order.customer.lastName}</p>
                    <p><span className="text-gray-600">Email:</span> {order.customer.email}</p>
                    <p><span className="text-gray-600">Telefon:</span> {order.customer.phone}</p>
                    <p><span className="text-gray-600">Adresa:</span> {order.customer.address}, {order.customer.city}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Produse comandate
                </h3>
                
                <div className="space-y-4">
                  {order.items.map((item: any) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.brand}</p>
                        <p className="text-xs text-gray-600">Cantitate: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{item.price * item.quantity} MDL</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Delivery Information */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Truck className="h-5 w-5 mr-2" />
              Informații despre livrare
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Package className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Comanda pregătită</h4>
                <p className="text-sm text-gray-600">Produsele sunt pregătite pentru livrare</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">În tranzit</h4>
                <p className="text-sm text-gray-600">Comanda este pe drum către dvs.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Home className="h-6 w-6 text-gray-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Livrată</h4>
                <p className="text-sm text-gray-600">Comanda a ajuns la destinație</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Notă:</strong> Veți primi un email de confirmare cu detaliile comenzii și un SMS cu numărul de urmărire când comanda va fi expediată.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="/products"
              className="flex-1 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
            >
              Continuă cumpărăturile
            </a>
            <a
              href="/"
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
            >
              Înapoi la pagina principală
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
