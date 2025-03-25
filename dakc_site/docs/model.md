# Analytical Model
The repository contains Python scripts for analytical model for distributed memory $k$-mer counting. 

The default scripts will reproduce plots from our conference paper, based on hardware parameters and experiments performed using the [Phoenix supercomputer](https://gatech.service-now.com/home?id=kb_article_view&sysparm_article=KB0041976) at Georgia Tech. 

[DAKC GitHub Repository](https://github.com/Souvadra/dakc/tree/main/analytical_model)

## Description
- `kcount.py`: Funtion definitions for the analytical model of distributed-memory k-mer counting.
- `memory.py`: Seperate model to show memory overhead of multi-layered message aggregation.
- `params.py`: Machine parametes used for the analytical model. Edit this file with parameters of your target machine.
- `experiments.py`: Input and experimental values of k-mer counting for different synthetic datasets, as observed on the Phoenix machine. Edit this file with updated input and experimental results on your target machine
- `defaultplot.py`: Default plotting options.
- `cachepred.py`: Analytically predicts the L3 cache misses for inputs mentioned in `experiments.py` and compares them against experimental results. 
- `hwresource.py`: Analytically predicts what percentage of k-mer counting is spent doing "memory access", "communication", and "computation". 

## How to execute
Edit the `params.py` and `experiments.py` file as required. Then simply run `python <scriptname>.py`. The script will produce a figure inside the `figures` directory.
