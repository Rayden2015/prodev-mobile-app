import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  searchGroup: {
    marginBottom: 24,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333333",
  },
  searchControl: {
    flex: 1,
    marginTop: 4,
    color: "#777777",
  },
  searchButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingHorizontal: 4,
  },
  filterContainer: {
    width: width * 0.28,
    height: 72,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    marginRight: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
  },
  listingContainer: {
    flex: 1,
    marginTop: 24,
  },
  paginationContainer: {
    marginTop: 16,
    alignItems: "center",
    marginBottom: 32,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };

