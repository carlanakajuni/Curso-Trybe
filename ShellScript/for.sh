#!/bin/bash

arquivo=/home/carla/Trybe/ShellScript/palavras.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done
