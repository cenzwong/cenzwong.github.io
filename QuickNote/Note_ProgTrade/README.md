# Lesson 5 Technical analysis
<a href="https://cenzwong.github.io/QuickNote/Note_ProgTrade/Jupyter%20Notebook/Lesson%205/CZ_Technical_Analysis_MHI_27062020_v2_5.html">Python Code with HTML</a>

## Notes loss ...
BackTest
- max drawdown
- win-loss ratio (>50%)
- profit rate

please refer to the following link for details on the use of the TA-Lib please refer to the following link, you need to build the source from scratch.

https://mrjbq7.github.io/ta-lib/doc_index.html

You could click here and search for the latest version of TAlib package file   

https://www.lfd.uci.edu/~gohlke/pythonlibs/

**Note:** It is very difficult to install the original python package! Don't try to do that lol

installation
```python 
import sys
!{sys.executable} -m pip install "D:/TA_Lib-0.4.17-cp37-cp37m-win32.whl"
```

Homework: 
use candle stick two chart
Add a line, for MACD 9x19x50
Middle RSI
MACD
Volume

# Lesson 4 Data Visualization
<a href="https://cenzwong.github.io/QuickNote/Note_ProgTrade/Jupyter%20Notebook/Lesson%204/CZ_Data%20Visualization_student_v9.html">Python Code with HTML</a>
## Library
Package name | Short Form 
---|---
Numpy | np 
Pandas | pd
Tensorflow|tf
yfinance | yf
matplotlib.pyplot | plt
datetime | dt
matplotlib.dates | mdates
talib | TA

## Plot
```python
f1, ax = plt.subplots(figsize = (15,10))
ax.plot(data["Date"],data["Close"],color="blue",label="Close",linewidth=1)
ax.grid(True)
plt.show()
```

- | - |- |-
---|--- | ---| ---
(0,0) | (1,0) | (2,0) | (3,0) 
(0,1) | (1,1) | (2,1) | (3,1) 
(0,2) | (1,2) | (2,2) | (3,2) 
(0,3) | (1,3) | (2,3) | (3,3) 

```python
# first create the outer space
fig = plt.figure(figsize = (15,10))

# The subplot as 5 row, 4 column, make the first plot start as 0,0 and it conqerer 4x4 area.
ax1 = plt.subplot2grid((5,4), (0,0), rowspan=4, colspan=4)

ax1.plot(data["Date"],data["Close"],color="blue",label="Close",linewidth=1)
ax1.grid(True)

# The subplot as 5 row, 4 column, make the second plot start as 4,0 and it conqerer 1x4 area.
ax1v = plt.subplot2grid((5,4), (4,0), sharex=ax1, rowspan=1, colspan=4)
# re-assign the tick labels 
ax1v.axes.yaxis.set_ticklabels(["Volume"])
ax1v.grid(False)
#ax1v.set_ylim(0, data["Volume"].max())
# hide the plot 1 x axis label
plt.setp(ax1.get_xticklabels(), visible=False) 
# convert into bar chart
ax1v.bar(data["Date"],data["Volume"])
# stick both chart tgt
plt.subplots_adjust(hspace=0)
ax1.legend(loc="upper left")

plt.show()
```

## Box plot
It shows the analysis on the distrbution.
![alt text](https://miro.medium.com/max/18000/1*2c21SkzJMf3frPXPAR_gZA.png "Box Plot")

## Code explain
This shows the percentage change of the close price with ten data running. And do a standard deviation on the data
``` python
data["Close"].pct_change().rolling(window=10).std().plot(figsize=(16,4))
plt.show()
```

## candlestick chart

We could use candlestick_ohlc and candlestick2_ohlc for the generation of the candlestick chart

```python
import sys
!{sys.executable} -m pip install https://github.com/matplotlib/mpl_finance/archive/master.zip

from mpl_finance import candlestick2_ohlc
from mpl_finance import candlestick_ohlc
import matplotlib.dates as mdates
%matplotlib inline

```
The candle stick2 package is used to solve the SAT, SUN no transaction issue.
**NOTE:** The sequence must be in order
```python
ohlc= data[['Date', 'Open', 'High', 'Low','Close',"Volume"]].copy()
ohlc.head()

# convert the date into the custom format
ohlc["Date"] = ohlc["Date"].apply(mdates.date2num)

f1, ax = plt.subplots(figsize = (15,10))

candlestick_ohlc(ax, ohlc.values, width=0.8, colorup='green', colordown='red')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
ax.grid(True)

plt.show()
```

# Lesson 3 Data Mgnt & Automation in Python
## Data visualization


## Task scheduler
1. ```bash  
    // Find the path of Python
    where python
   ```
2. Open Task scheduler
3. Disable Log on function

or on Cloud. (vps) or on NAS

Windows Task scheduler, 
1. Need to specify the path of Python, 
2. Need to specify the path of Python Script.

## Data concatenating

- Right (axis=1)
- Bottom (axis=0)

```python
df3["Age_Group"] = np.where(df3.Age >= 40,"M","Y")

# append more column with condition
```

Joining two table, the element (left_on) can be list.
```python
df5=pd.merge(left=df3,right=df4,how="left",left_on="Name",right_on="Name")
df5=pd.merge(left=df3,right=df4,how="inner",left_on="Name",right_on="Name")
```

## Data aggregation
From day to week, 
- Open --> First
- High --> Max
- Low --> Min
- Close --> Last
- Volume --> Sum

Basic python is using "None" to represent missing value
Pandas python is using NaN to represent missing Value

```python
data_weekly=data.groupby(["Year","Week"]).agg({'Open':'first', 
                                       'High':'max', 
                                               'Low':'min', 
                                               'Close':'last',
                                               'Volume':'sum',
                                              "Date":"first"})

# That is multiple level index with Year, and Week.
# The sum, first, are those built in function.
data_weekly.index=data_weekly["Date"]
data_weekly.head()

```

## Last lecture answer: Exercise_three_v1_2.ipynb

- Pandas selecting one row is using Pandas.iloc[num]

## Summary
DateType is not string, it is a number, it is integer. 


# Lesson 2 Use of Pandas 140620

## Homwork
Write a function called max-return("2019-09-01",List_Stock_code)
Tell you back the highest return. 
highest return = (Today price, - old price) / old price, * 100

## Pandas

```python 
import pandas as pd
```

Shortform:
object | Shortform
---|---
pd.DataFrame | df
pd.Series | ds / ser

df consist a lot of ds, and getting out one colum, it will become ds

```Python
# pd.Series
data = pd.Series([0.25, 0.5, 0.75, 1.0])
>> ======
0    0.25
1    0.50
2    0.75
3    1.00
dtype: float64
========
data = pd.Series([0.25, 0.5, 0.75, 1.0],index=["a","b","c","d"])
>> ======
a    0.25
b    0.50
c    0.75
d    1.00
dtype: float64
========
# You can also create Series with Dictionary

data[(data>0.6) & (data<1)]
data[(data>0.6) and (data < 1)] # <----- it has error
# note that python is valid to use "and" like, True and False --> False, but not with pandas
# same for "or , | "

# They are just the same
df[df.Income<3000]
df[df["Income"]<3000]

```

```python
Dict1={"A1":1,"A2":2,"A3":3,"A4":4}
Dict2={"A1":"Peter","A2":"Victor","A3":"Albert","A4":"Alice"}
Dict3={"A1":1000,"A2":20000,"A3":3000,"A4":4000}
Dict4={"A1":"Lee","A2":"Chan","A3":"Tam","A4":"Cheung"}

ID=pd.Series(Dict1)
First_Name=pd.Series(Dict2)
Income=pd.Series(Dict3)
Last_Name=pd.Series(Dict4)
df=pd.DataFrame({"ID":ID,"First_Name":First_Name,
                 "Income":Income,"Last_Name":Last_Name})


df

>> ======
ID	First_Name	Income	Last_Name
A1	1	Peter	1000	Lee
A2	2	Victor	20000	Chan
A3	3	Albert	3000	Tam
A4	4	Alice	4000	Cheung
=========
```

- Series
    - The Series element must be in same type (eg: float64)
- Dataframe

Comment:
- The index can be like stock code.
https://www.kdnuggets.com/2019/10/5-advanced-features-pandas.html

## Dictionary
It has key-value pairs
Value can be any "Python data object" (eg, List, Dictionary, Dataframe, String)

Before Pandas, we use dictionary to hold a structure table.

Colum | Colum is Key | Colum is Key
---|---|---
List holding Value| List 2| List 3

myDict = {"myKey":"myVal"}\
myDict["myKey"] 

```Python
# Series to list
list(df.Column)
df.Column.to_list()

# list to Series
pd.Series([])

```


# Lesson 1 Basic Python 070620
## Self into note

MetaStock, EasyLang, EA, MT4, Multichart, IB, MQL etc

straegy, MHI 5M, ADX indicator

Trade FX, CFD, Option

U.S. Dollar Index <--> ^HSI, negative correlated.



BackTest** Automation**

Get data:
- yahoo finance, 
- investing.com
- web scraping
- Though broker (IB, Futu) **may need money

Python Package:
- Numpy
- Pandas (Big data)
- Matplotlib (Data visualization)
- Tensorflow (Deep Learning)
- Beatifulsoup (web scraping)
- Selenium (web scraping)
- Scikit learn (Machine Learning)
- yfinance (yahoo Finance data)
- TA Lib (Technical analysis on finance)
- investpy (Investing.com python package)
- IB, FUTU has API (For connecting with broker)


Package name | Short Form 
---|---
Numpy | np 
Pandas | pd
Tensorflow|tf
yfinance | yf




Task list:
- Data collection (e.g. instrument: HSI futures/FX M5, Duration: 2 Years)
- Data processing 
- Data analysis
    - Hypotheses making
    - Data visualization
- Back testing of Hypotheses
    - Evaluate the performance
    - Positive expectancy
    - Define the trading strategy (enter/exit/stoploss)
- Detection and alerting system (Email/Telegram)
- Auto-execution and notification system (Order execution)
- Monitoring of trading system (no hang-up/auto restart of IB connection etc)
- Summary of performance (daily/weekly)

---

Python Data types:
- booleans
- integer
- floats
- strings
- [datetime](https://docs.python.org/3.8/library/datetime.html)

Python Data structures:
- list []
    - The data type can be mixed
    - Can apply list comprehension
    - Run time long  --> Link List
    - Therefore the maximum size of a python list on a 32 bit system is 536,870,912 elements
- dictionary {key:value}
- Tuples ()
- Sets {}
- pandas.series
- pandas.dataframe
- numpy.array
- numpy.matrix

Use of Pandas:
- Filtering (by position, boolean series, index)
- Data collection, aggregation, time management, joining and concatenating multiple data frames

Setting up environment
1. Anaconda (run as admin)

Python script can be run on the command shell

Task scheduler can do the Automation, Run that script on a schedule.

## Run Jupyter on the Cloud
- Binder
- Kaggle Kernels
- Google Colaboratory (Colab)
- Microsoft Azure Notebooks
- CoCalc
- Datalore
- IBM Cloud

## Jupyter Cell type
- Markdown
- Code
- Raw NBConvert 
    - used to render different code formats into HTML or LaTeX by Sphinx
- Heading

```Python
print('{0}, {1}, and {other}.'.format('00', '11', other='otherr'))
# 00, 11, and otherr.

# start from a to b exclude b step c
list[a:b:c]
```

String in Python is immutable.
``` Python
s = "abcdefg"
# s[0] = 'b' --> # is prohitbit
s = 'b' + s[1:]
```

```python
for i in range(len(myList)):
    print(myList[i])
```

```python
L1=[1,2,3,4,6.7,9,11,100]
L2=[]
for i in L1:
    if i >=10:
        L2.append(i)
print(L2)

# list comprehensive
L2 = [i for i in L1 if i >= 10]
```

```python
days=["1","13","2","3","4","5","6","13","7"]

for i in days:
    if i == "13":
        days.remove("13")
days

# list comprehensive
days = [ele for ele in days if ele != "13"]
days
# ['1', '2', '3', '4', '5', '6', '7']
```

```Python
L = ["700.HK", "1398.HK", "2628.HK"]
[ele[:-3] for ele in L]
# ['700', '1398', '2628']

```


list element
- list.append()
- list.insert()
- list.extend()
- list.del
- list.remove()
- list.pop()
- list.sort
- list.count()
- list.len()
- list.index()
- "1" in list
