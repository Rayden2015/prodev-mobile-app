import { View } from "react-native";

import PropertyListingCard from "./common/PropertyListingCard";
import { PropertyListingProps } from "@/interfaces";

type PropertyListingListProps = {
  listings: PropertyListingProps[];
};

const PropertyListing = ({ listings }: PropertyListingListProps) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;