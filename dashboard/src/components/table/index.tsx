const TopSellingProductsTable = () => {
  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18
    },
    {
      name: "Marco Lightweight Shirt",
      price: 128.50,
      quantity: 37,
      amount: 4754.50
    },
    {
      name: "Half Sleeve Shirt",
      price: 39.99,
      quantity: 64,
      amount: 2559.36
    },
    {
      name: "Lightweight Jacket",
      price: 20.00,
      quantity: 184,
      amount: 3680.00
    },
    {
      name: "Marco Shoes",
      price: 79.49,
      quantity: 64,
      amount: 1965.81
    }
  ];

  const formatCurrency = (amount: number | bigint) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="bg-[#f7f9fb] dark:bg-[#282828] rounded-[8px] p-8 h-full">

      <h2 className="text-sm font-semibold text-[#1c1c1c] dark:text-[#fff] mb-4">
        Top Selling Products
      </h2>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <th className="text-[#a0a2a3] dark:text-[#7d7d7d] text-left py-3 border-b border-[#cccdcf] dark:border-[#525252] font-inter font-normal text-[12px] leading-[18px] tracking-normal"
>
                Name
              </th>
              <th className="text-[#a0a2a3] dark:text-[#7d7d7d] text-left py-3 border-b border-[#cccdcf] dark:border-[#525252] font-inter font-normal text-[12px] leading-[18px] tracking-normal">
                Price
              </th>
              <th className="text-[#a0a2a3] dark:text-[#7d7d7d] text-left py-3 border-b border-[#cccdcf] dark:border-[#525252] font-inter font-normal text-[12px] leading-[18px] tracking-normal" 
              >
                Quantity
              </th>
              <th className="text-[#a0a2a3] dark:text-[#7d7d7d] text-left py-3 border-b border-[#cccdcf] dark:border-[#525252] font-inter font-normal text-[12px] leading-[18px] tracking-normal" 
                >
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="py-4 font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                  {product.name}
                </td>
                <td className="py-4 font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                  {formatCurrency(product.price)}
                </td>
                <td className="py-4 font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                  {product.quantity}
                </td>
                <td className="py-4 font-inter font-normal text-[12px] text-[#1c1c1c] dark:text-[#fff] leading-[18px] tracking-normal">
                  {formatCurrency(product.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProductsTable;
