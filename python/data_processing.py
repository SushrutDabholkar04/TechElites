import pandas as pd
import numpy as np


df['volume_MA'] = df['volume'].rolling(window=3).mean()
