import * as React from 'react';

export interface IReactFullScreenChildrenProps {
  ref: React.MutableRefObject<undefined>;
  isEnabled: boolean;
  onToggle: () => void;
  onRequest: () => void;
  onExit: () => void;
}

export interface ReactFullScreenComponentProps {
  children: (props: IReactFullScreenChildrenProps) => React.ReactNode;
  onChange?: React.FC;
  onError?: React.FC;
}

export default class ReactFullScreenComponent extends React.Component<ReactFullScreenComponentProps> {}
