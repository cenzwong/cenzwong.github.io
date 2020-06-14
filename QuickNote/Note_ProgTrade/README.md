# Lesson 2 Basic Python 140620

## Dictionary
It has key-value pairs
Value can be any "Python data object" (eg, List, Dictionary, Dataframe, String)

Before Pandas, we use dictionary to hold a structure table.

Colum | Colum is Key | Colum is Key
---|---|---
List holding Value| List 2| List 3

# Lesson 1 Basic Python 070620
## Self into note

MetaStock, EasyLang, EA, MT4, Multichart, IB, MQL etc

straegy, MHI 5M

Trade FX, CFD, Option

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