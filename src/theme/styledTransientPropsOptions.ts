/**
 * If you want to prevent props meant to be consumed by styled components from being passed
 * to the underlying React node or rendered to the DOM element, you can prefix the prop name
 * with a dollar sign ($), turning it into a transient prop.
 *
 * This idea is adopted from styled-components v5.1.
 */
export const styledTransientPropsOptions = Object.freeze({
  shouldForwardProp: (propName: PropertyKey) => !String(propName).startsWith('$')
})
