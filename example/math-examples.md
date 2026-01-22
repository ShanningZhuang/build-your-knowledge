# Math Examples

This page demonstrates the full math support in this template.

## Basic Equations

Inline: The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.

Display:

$$
x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$

## Calculus

### Derivatives

$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

### Integrals

$$
\int_a^b f(x)\,dx = F(b) - F(a)
$$

## Linear Algebra

$$
\mathbf{Ax} = \mathbf{b}
$$

$$
\det(\mathbf{A}) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^{n} a_{i,\sigma(i)}
$$

## Probability & Statistics

Bayes' theorem:

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

Normal distribution:

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

## Machine Learning

Softmax function:

$$
\text{softmax}(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}}
$$

Cross-entropy loss:

$$
\mathcal{L} = -\sum_{i=1}^{n} y_i \log(\hat{y}_i)
$$

## Complex Expressions

This template handles complex LaTeX with `{{...}}`:

$$
\begin{array}{c}
{{X_0 \sim p_{\text{init}}}} \\
{{\Rightarrow X_t \sim p_t}}
\end{array}
$$

## Aligned Equations

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$
