window.onload = function () {
  // Show order history if available
  const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
  const historyDiv = document.getElementById("historyList");

  if (orderHistory.length > 0) {
    orderHistory.reverse(); // Show newest first
    historyDiv.innerHTML = orderHistory.map(order => `
      <div style="border:1px solid #ccc; padding:10px; margin:10px; border-radius:5px;">
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>Diamonds:</strong> ${order.diamonds.join(', ')}</p>
        <p><strong>Total:</strong> Rs${order.total}</p>
        <p><strong>Status:</strong> ${order.status}</p>
        <p><strong>Date:</strong> ${order.date}</p>
      </div>
    `).join('');
  } else {
    historyDiv.innerHTML = "<p>No previous orders found.</p>";
  }
}
