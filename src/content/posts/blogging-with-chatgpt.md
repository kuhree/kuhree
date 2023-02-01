---
id: "00-inbox/ideas-from-chatgpt.md"
banner: "https://cdn.openai.com/research-covers/openai-charter/2x-no-mark.jpg"
banner_alt: "Abstract image of a cylinder, sphere, and cone merging into each other from top to bottom"
aliases:
  - Blogging with ChatGPT
description:
  ChatGPT is all the rage right now and I want to understand it a bit better.
  Here's my attempt at getting it to suggest content ideas for this very blog,
  as well as some exploration into what a LLM is.
author: "Khari Johnson"
isDraft: false
isFeatured: false
publishedAt: 2023-01-31:12:30.000Z
tags:
  - ChatGPT
  - AI
  - Large Language Model (LLM)
---

This site is a _bit_ empty with the single post from the beginning of 2020.
I've heard that ChatGPT can help with suggesting and outlining content and that's something I could use right now.

First, an obligatory intro to ChatGPT because I have a few questions.

## Table of contents

## What is ChatGPT?

> Chat Generative Pre-Trained Transformer,[1] commonly called ChatGPT, is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3 family of large language models, and is fine-tuned (an approach to transfer learning)[2] with both supervised and reinforcement learning techniques.
>
> - https://en.wikipedia.org/wiki/ChatGPT

> **Prompt: Now, how do you take my input and parse it through your neurons to generate a response?**
>
> When you input a question or text to me, it goes through a process called "inference" which is essentially using the pre-trained model (the neurons, layers, etc that we talked about earlier) to generate a response.
> The input text is first preprocessed, which includes tasks such as tokenization, lowercasing, and removing any special characters. Then, each token is converted into a numerical representation, known as a "feature vector." This is done by looking up the token in a pre-trained embedding matrix, which maps each token to a high-dimensional vector that captures its meaning.
> The preprocessed input is then passed through the neural network, layer by layer. Each layer performs calculations on the input, and the output of one layer is passed as input to the next layer. The final output of the neural network is a probability distribution over all possible responses.
> The highest probability response is then selected as the final output.
> It's important to note that the neural network is trained on a large dataset of text, so it has learned to make predictions based on patterns and relationships it has seen in the training data. This is why the generated response may not always be perfect, but it is based on patterns in the data it has seen during training.

### Who owns it?

OpenAI, but Microsoft is investing ~$10 billion for an eventual 49% stake.

### Who own it's production?

Kinda hard to get a concrete answer on this, but I would imagine the company who trained/owns the model get to lay claim to ownership of it's output.

### What are it's limitations?

> From: https://openai.com/blog/chatgpt/
>
> - ChatGPT sometimes writes plausible-sounding but incorrect or nonsensical answers. Fixing this issue is challenging, as: (1) during RL training, there’s currently no source of truth; (2) training the model to be more cautious causes it to decline questions that it can answer correctly; and (3) supervised training misleads the model because the ideal answer depends on what the model knows, rather than what the human demonstrator knows.
> - ChatGPT is sensitive to tweaks to the input phrasing or attempting the same prompt multiple times. For example, given one phrasing of a question, the model can claim to not know the answer, but given a slight rephrase, can answer correctly.
> - The model is often excessively verbose and overuses certain phrases, such as restating that it’s a language model trained by OpenAI. These issues arise from biases in the training data (trainers prefer longer answers that look more comprehensive) and well-known over-optimization issues.12
> - Ideally, the model would ask clarifying questions when the user provided an ambiguous query. Instead, our current models usually guess what the user intended.
> - While we’ve made efforts to make the model refuse inappropriate requests, it will sometimes respond to harmful instructions or exhibit biased behavior. We’re using the Moderation API to warn or block certain types of unsafe content, but we expect it to have some false negatives and positives for now. We’re eager to collect user feedback to aid our ongoing work to improve this system.

### Is it the only one?

No, but it's the trendiest currently.

#### What are the alternatives?

- [Chatsonic](https://writesonic.com/chat) - Can access the internet
- [Character.AI](https://beta.character.ai/) - Talk with your favorite characters (both fictional and non)
- [Perplexity AI](https://www.perplexity.ai/) - Simpler free ChatGPT
- [Jasper Chat](https://www.jasper.ai/) - content generator
- And plenty more...

### Can I run one?

> **Prompt: Can I run my own version of you on my own infra**
>
> Yes, it is possible to run your own version of a language model like ChatGPT on your own infrastructure.
> However, it requires significant resources in terms of computational power and storage.
> Additionally, training a language model from scratch requires a large amount of labeled data, as well as expertise in machine learning and natural language processing.
> If you're looking to use a pre-trained model, such as ChatGPT, OpenAI offers an API that allows you to make requests to the model without having to run it on your own infrastructure.
> This can be a more cost-effective and efficient solution.

## The Ideas

### First batch

> **Prompt:** I need some ideas for blog posts.

- How to create a successful morning routine
- The benefits of meditation and mindfulness
- A beginner's guide to meal prepping
- The top 10 books to read for personal development
- How to create a budget and stick to it
- The impact of social media on mental health
- Tips for working from home
- The importance of self-care and how to practice it
- A review of the latest tech products
- The benefits of regular exercise and how to get started

### Second batch

> **Prompt:** No no no. None of that basic stuff. And more related to software engineering. I'm trying to get a job and build an online presence.
> In order to do that I have to establish myself as an authority or at least knowledgeable in the tools that I want to work with.

- An in-depth look at a particular programming language or framework, such as Python, JavaScript, or React
- How to optimize performance in a web application
- An introduction to test-driven development and its benefits
- A comparison of different databases and when to use them
- Tips and tricks for debugging code
- An overview of the latest advancements in machine learning and their potential applications
- A guide to containerization and orchestration using tools like Docker and Kubernetes
- A review of different cloud computing platforms and services, such as AWS, GCP, or Azure
- An explanation of DevOps practices and how they can improve collaboration and efficiency
- An exploration of the ethical implications of artificial intelligence and automation

### Third Batch

> **Prompt:** No tips, no guides. I just want to speak on my experience right now.
> Maybe later we can come back to the guides, tutorials, and the like.

- A personal account of a particularly challenging project you worked on and how you overcame any obstacles
- A reflection on your growth and development as a software engineer over time
- An analysis of a current trend or issue in the software engineering industry and your thoughts on it
- A summary of a conference or meetup you attended and the key takeaways you gained
- A comparison of different work environments or cultures you have experienced as a software engineer
- A discussion of your favorite tools and how they have helped you to be more productive
- A reflection on a mistake you made and the lesson you learned from it
- An analysis of a specific problem you encountered and how you solved it
- A discussion of the most important skills a software engineer should have
- A post discussing the most important lessons you've learned so far in your career in software engineering.

#### Fourth Batch

> **Prompt:** try some more, less preachy

- A day in the life of a software engineer: a candid diary entry on your daily routine and tasks
- An overview of a recent project you worked on, with a focus on the interesting technical details and challenges you faced
- A discussion of any non-technical skills that you have found to be essential in your role as a software engineer
- An analysis of a particularly interesting dataset or dataset analysis you've worked on
- A personal story of how you became interested in software engineering and why you chose this career path
- A summary of a recent hackathon you attended, including what you built and what you learned
- A list of your favorite resources for staying up-to-date with the latest trends in software engineering
- A post discussing any unique or interesting side projects you have worked on
- An interview with a software engineer you admire or respect in the industry
- A post discussing the most interesting problems you've solved so far and how you solved them.

#### Fifth Batch

> **Prompt:** Even less preachy, stay away from trends

- A reflection on a specific challenge you faced while working on a software project and how you overcame it
- A behind-the-scenes look at a recent project you worked on, including the technical details and any unexpected roadblocks you encountered
- A discussion of any non-technical skills that you have found to be important in your day-to-day work as a software engineer
- A post discussing the importance of communication and collaboration in software engineering, and how you work with others in your team
- A description of a particularly interesting or complex software problem you've solved, and the thought process you went through to find a solution
- A list of your favorite tools and resources for debugging and troubleshooting code
- A personal story of how you got into software engineering and the journey you've been on so far
- A discussion of the importance of continuous learning and self-improvement in software engineering and how you stay current
- A post discussing the importance of maintaining a healthy work-life balance as a software engineer
- A reflection on a specific project you worked on and the most important lessons you learned from it.

## Conclusion

ChatGPT is really fun.
I get some of the hype.
It's not always 100% _accurate_ but that's been known and seems to be a limitation to LLM's themselves.
It still does a nice job of generating ideas and getting thoughts flowing and
it excels at outlining, revising, and extracting patterns in my experience, but in the process it'll be happy to tell you something that just doesn't exist.

Next, I want it to help me write my resume, I think it'll be good for that. Or maybe try this same expirement with Jasper.AI instead.
