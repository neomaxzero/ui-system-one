# UI System-1

Intuitive Design system.

No system-2 involved in the development of this library.

## Motivation
- Every project I create that has some custom style I go for a new solution. This is an attempt to stop that.
- A lot of utility functions and tools are spread through out different repos that get outdated and with security/performance drawbacks. 
- There is no reason to recreate pipeline scripts with the existing tooling that is smart enough to work in the same repo and be fast.

## Technology choices
###  CSS Layer

I opted for having CSS classes to be the foundation of styling component. CSS artifacts can be included to sites that won't need JS. Avoiding locking how to style applications to JS.
### React Components

Still TBD, Alternatives: 
- Style-components which will encapsulate classes
    Advantages:
    - Theming.
    - Greatly encapsulates HTML elements.
- Classnames utility function.  
    - Lighter
    





