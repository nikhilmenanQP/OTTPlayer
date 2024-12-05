type SharedStackProps = {
  initialRouteName: 'HomeScreen' | 'MoviesScreen';
};

type RootStackParamList = {
  DetailScreen: {
    data: {
      contentType?: string;
      seasonsData?: Array<any>;
      extras?: Array<any>;
    };
  };
  HomeScreen: undefined;
  MoviesScreen: undefined;
  PlayerScreen: undefined;
  ProfileScreen: undefined;
};
