You can find the source code and contribute to the project on [GitHub](https://github.com/Souvadra/dakc/tree/main).

[Distributed Asynchronous k-mer Counting (DAKC)](dakc.md)

DAKC is the fastest distributed-memory parallel algorithm and software for k-mer counting.
It is based on an asynchronous algorithm built on top of HCLib-Actor runtime system.
It gives you upto $100\times$ speedup over commonly used k-mer counting tools like KMC3, and $2\times$ speedup over the previous fastest algorithm HySortK.

[Analytical Model of k-mer Counting](model.md)

First principle analytical model for distributed memory k-mer counting.
Users can use this model to estimate the performance of k-mer counting on their target machine.

[PakMan* - A faster PakMan](pkm.md)

A faster version of the state of the art short-read genome assembly toolkit, PakMan.
We replaced quicksort in PakMan with radix-sorting and tuned the performance, thereby speeding up its $k$-mer counting kernel by 2$\times$ across synthetic and real-world datasets.

## License 
All the tools mentioned above are licensed under the GNU General Public License v3.0. You can find the full license text [here](https://www.gnu.org/licenses/gpl-3.0.en.html).