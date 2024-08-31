from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.seasonal import seasonal_decompose

# Seasonal Decomposition
decomposition = seasonal_decompose(df.set_index('timestamp')['volume'], model='additive', period=30)
decomposition.plot()
plt.show()

# ARIMA Forecasting
df.set_index('timestamp', inplace=True)
model = ARIMA(df['volume'], order=(5, 1, 0))  
model_fit = model.fit()
forecast = model_fit.forecast(steps=10)

plt.figure(figsize=(12, 6))
plt.plot(df.index, df['volume'], label='Observed')
plt.plot(pd.date_range(df.index[-1], periods=11, freq='D')[1:], forecast, label='Forecast', color='red')
plt.xlabel('Timestamp')
plt.ylabel('Volume')
plt.title('Volume Forecast')
plt.legend()
plt.show()
