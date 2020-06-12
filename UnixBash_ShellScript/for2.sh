#!/bin/bash

echo "Escreva um caminho de um arquivo ou diretório:"
read item

	if [ -f $item ]
	then
		echo "Este item $item é um arquivo"
	elif [ -d $item ]
	then
		echo "Este item $item é um diretório" 
	else 
		echo "Este item $item é alguma outra coisa"
	fi
ls -l
