import matplotlib.pyplot as plt
import seaborn as sns

# Plot volume over time
plt.figure(figsize=(12, 6))
plt.plot(df['timestamp'], df['volume'], marker='o', linestyle='-', color='b')
plt.title('Volume Over Time')
plt.xlabel('Timestamp')
plt.ylabel('Volume')
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Moving Average Plot
plt.figure(figsize=(12, 6))
plt.plot(df['timestamp'], df['volume'], label='Original Volume')
plt.plot(df['timestamp'], df['volume_MA'], label='Moving Average Volume', color='red')
plt.xlabel('Timestamp')
plt.ylabel('Volume')
plt.title('Volume Over Time with Moving Average')
plt.legend()
plt.show()

# Anomaly Detection Plot
df['z_score'] = (df['volume'] - df['volume'].mean()) / df['volume'].std()
df['anomaly'] = df['z_score'].abs() > 3

plt.figure(figsize=(12, 6))
plt.plot(df['timestamp'], df['volume'], label='Volume')
plt.scatter(df[df['anomaly']]['timestamp'], df[df['anomaly']]['volume'], color='red', label='Anomalies')
plt.xlabel('Timestamp')
plt.ylabel('Volume')
plt.title('Anomaly Detection in Sensor Data')
plt.legend()
plt.show()

# Correlation Matrix Heatmap
correlation_matrix = df[['volume', 'humidity', 'gasLevel']].corr()
plt.figure(figsize=(8, 6))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()
