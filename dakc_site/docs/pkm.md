# PakMan*: A Faster Version of PakMan

PakMan is a short-read genome assembly algorithm originally published by Ghosh et. al. at IPDPS 2019 conference. 
In this repository, we have modified the original PakMan algorithm to use radix-sorting instead of quicksort. 
This modification and some performance fine-tuning result in `PakMan*`, which has a $2\times$ faster $k$-mer counting kernel.

[PakMan* GitHub Repository](https://github.com/Souvadra/dakc/tree/main/pakman_star)

[Original PakMan GitHub Repository](https://github.com/pnnl/pakman)

## How to Run PakMan vs PakMan*

If `-DFAST` flag is present during compilation, then `PakMan*` is executed. Otherwise, the executable is the same as the original `PakMan` algorithm.

## How to Compile PakMan*

Type `make clean && make` to compile PakMan* 

## How to execute PakMan*
Below are the instructions for running PakMan* on a synthetic dataset generated using our scripts.
```
srun -N <num_nodes> -n <total_cores> --cpu-bind=cores pakman -r 150 -c 50 -b 1000000000 -t 21 -n 100000 -f <input_fasta_file>
```

#

Below is an excerpt from the README file of the original PakMan repository, which serves as an excellent resource for understanding the usage of the PakMan toolkit. 
For more info please visit the original github repository of PakMan.

# PaKman: A Scalable Algorithm for Generating Genomic Contigs on Distributed Memory Machines

We address the problem of performing large-scale genome assemblies on a distributed memory parallel computer. PaKman presents a solution for the two most time-consuming phases in the full genome assembly pipeline, namely, k-mer Counting and Contig Generation. A key aspect of our algorithm is its graph data structure (PaK-Graph), which comprises fat nodes (or what we call "macro-nodes") that reduce the communication burden during contig generation.

## Dependencies:
----------------
PaKman has the following dependencies:
* MPI library (preferably MPI-3 compatible)
* C++14 (or greater) compliant compiler

Note: 
At this time, PaKman requires the input files to be in the FASTA format and utilizes single-end reads to generate the contigs. We are working to extend the functionality to  perform scaffolding accepting paired-end reads as input. 


## Build: 
----------------
Please specify the k-mer length at the time of building:

For e.g: `make ksize=32`

If ksize is not specified at the time of build, PaKman will build with default size of k=31.

Note:
* At present, PaKman supports k-mer lengths of k<=64.
* Pass/update -DLMER_LENGTH in the Makefile to update the LMER size. Default value is set to 8 (recommended).


## Execute:
----------------
`mpiexec -np $procs $BINARY -f $INPUT -b $MAX_BATCH_SIZE -r $AVG_READ_LEN -c $COVERAGE -t $BUCKET_CUTOFF -n $MERGE_CUTOFF`

For example:

`mpiexec -np 4 ./pkmer -f ~/string-graph/inputs/Ecoli_reads_80x.fasta -b 100000000 -r 100 -c 80 -t 21 -n 100000`

## Mandatory input arguments to PaKman:
------------------------------
1. `-f <INPUT>`: input reads file in .fasta format
2. `-b <MAX_BATCH_SIZE>`: number of k-mers to include in a batch for collective communication. Default value set to 100M (100,000,000). If memory is short, consider reducing to 50M.
3. `-r <AVG_READ_LENGTH>`: average length of the short reads.
4. `-c <COVERAGE>`: coverage of the input reads dataset
5. `-t <BUCKET_CUTOFF>`: number of buckets to consider while determining the cutoff from the k-mer frequency histogram. Default value set to 21.
6. `-n <MERGE_CUTOFF>`: number of nodes at which the iterative phase of merging macro-nodes is concluded, Default value set to 100,000.

## Publications:
---------------
1) Ghosh, Priyanka, Sriram Krishnamoorthy, and Ananth Kalyanaraman. "PaKman: A Scalable Algorithm for Generating Genomic Contigs on Distributed Memory Machines." IEEE Transactions on Parallel and Distributed Systems (TPDS) vol. 32, no. 5, pp. 1191-1209, 2021. DOI: 10.1109/TPDS.2020.3043241. 

2) Ghosh, Priyanka, Sriram Krishnamoorthy, and Ananth Kalyanaraman. "PaKman: Scalable Assembly of Large Genomes on Distributed Memory Machines." In 2019 IEEE International Parallel and Distributed Processing Symposium (IPDPS), pp. 578-589. IEEE, 2019.

## License:
-----------
This project is licensed under the BSD License, see LICENSE file for details.

## Acknowledgments:
------------------
This research used resources of the NERSC Office of Science User Facility supported by U.S. DOE under Contract No. DE-AC02-05CH11231. 
This work was supported in part by U.S. Department of Energy, Office of Science, Office of Advanced Scientific Computing Research 
under award number 63823. Pacific Northwest National Laboratory is operated by Battelle for DOE under Contract DE-AC05-76RL01830. 
The research is in parts supported by U.S. NSF grants CCF 1815467, OAC 1910213, and CCF 1919122 to Washington State University.