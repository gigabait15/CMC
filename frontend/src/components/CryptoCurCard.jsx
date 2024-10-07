import {Card} from 'antd';

function CryptoCurCard(props) {

  const { currency } = props
  const price = currency.quote.USD.price.toFixed(3);
  const change_price = currency.quote.USD.percent_change_24h.toFixed(2);
  const cap_price = (currency.quote.USD.market_cap/1000000000).toFixed(2);


  return (
<div className="flex justify-center items-center py-8">
  <Card
    title={
      <div className="flex items-center gap-3">
        <img
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
          alt={`${currency.name} logo`}
        />
        <span className="text-2xl font-bold">{currency.name}</span>
      </div>
    }
    style={{
      width: 650,
    }}
    className="shadow-lg border border-gray-200 rounded-lg p-6"
  >
    <p className="text-lg font-semibold">Текущая цена: <span className="font-bold">{price}</span> $</p>
    <p className="text-lg font-semibold">
      Изменение цены за 24 часа:{" "}
      <span className={change_price >= 0 ? 'text-green-500' : 'text-red-500'}>
        {change_price}%
      </span>
    </p>
    <p className="text-lg font-semibold">
    Рыночная капитализация: <span className="font-bold">{cap_price}</span> млрд $</p>
  </Card>
</div>

  )
}

export default CryptoCurCard
