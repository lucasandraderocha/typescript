# Typescript

## Módulos do curso

- [x] 0.1 - [Introdução](#introdução) ↴
  - [x] [Types](#types) ↴
  - [x] [Annotations](#annotations)
  - [x] [Tools](#tools)

- [ ] 0.2 - [Typescript Básico](#typescript-básico) ↴
  - [x] [Inference](#inference)
  - [x] [Data Types](#data-type)
  - [x] [Union](#union)
  - [x] [Type](#type)
  - [x] [Interface](#interface)
  - [ ] [Arrays](#arrays)
  - [ ] [Any](#any)
  - [ ] [Null](#null)

- [ ] 0.3 - Objetos e Interfaces ↴
  - [ ] instanceof
  - [ ] DOM
  - [ ] Eventos
  - [ ] Callback
  - [ ] Generics
  - [ ] Functions
  - [ ] Type Guard
  - [ ] Assertion
  - [ ] Intersection

- [ ] 0.4 - Mais Typescript ↴
  - [ ] Classes
  - [ ] Tuples
  - [ ] Keyof
  - [ ] Objetos

- [ ] 0.5 - Desenvolvimento ↴
  - [ ] TSConfig
  - [ ] Module
  - [ ] Declaration Files
  - [ ] Bibliotecas Externas
  - [ ] Ferramentas Front-end

- [ ] 0.6 - Prática Dados ↴
  - [ ] Fetch
  - [ ] Filter
  - [ ] Map
  - [ ] Reduce
  - [ ] User Type Guard

- [ ] 0.7 - Prática DOM ↴
  - [ ] Slide do tipo Stories

## Introdução

O *Typescript* é um Superset feito para adicionar camadas de segurança ao Javascript adicionando uma série de complementos à linguagem como: Sistema de [Types](#types), Genéricos, Narrowing, Tipos Estruturados, etc. Entretanto, ele não é executado diretamente nos navegadores, o código é "traduzido"(transpilado) para *Javascript* Padrão, onde aí sim é executado. O *Typescript* atua como um analisador sintático, previnindo erros de lógica e sintaxes antes mesmo da execução.

## Types

Uma das principais habilidades do TypeScript é seu *Static Type System*, que ajuda a identificar inconsistências e erros de tipo antes da execução. É aqui que entramos no conceito de *Inferência de Tipos*.

Pela sua natureza, o TypeScript infere automaticamente os tipos primitivos de variáveis baseando-se no valor inicial atribuído. Isso garante, por exemplo, que uma variável iniciada com texto seja tratada como `string`. Entretanto, quando a inferência não é o suficiente ou desejada, o Typescript permite a *Anotação Explícita de Tipos* para garantir total controle sobre o código.

## Annotations

Anotações de tipos são opcionais em relação a declaração de variáveis, pois o *Typescript* por si só tenta fazer a Inferência de tipos.

## Tools

Ferramentas necessárias para se utilizar o typescript:

- Node.js;
- NPM;
- Typescript;

## Typescript Básico

## Inference

Inferência ou *Inference* é *feature* do *Typescript* que permite o compilador deduzir o tipo da variável ou da expressão de forma automática. O que ajuda a você a não ter que declarar toda vez o tipo de uma variável ou expressão explicitamente.

