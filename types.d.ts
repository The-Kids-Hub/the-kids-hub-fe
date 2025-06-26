import React from 'react'

// This file contains global type declarations that will be available throughout the project

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
