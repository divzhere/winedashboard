import React from "react";
import "./inventory.scss";
import { useTable, useRowSelect, useSortBy, useExpanded } from "react-table";
import { tableJson } from "./tableJson";
import ProductCell from "./productCell";
import RatingsCell from "./RatingsCell";
import ExpandedRow from "./ExpandedRow";
import { ReactComponent as SortIcon } from "../../assets/sort.svg";
import { ReactComponent as SortUp } from "../../assets/sort_up.svg";
import { ReactComponent as SortDown } from "../../assets/sort_down.svg";
import { ReactComponent as Exapnd } from "../../assets/expand.svg";
import { ReactComponent as Exapnded } from "../../assets/expanded.svg";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function Table({ columns, data, renderRowSubComponent }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    visibleColumns,
    state: { selectedRowIds, expanded },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, j) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={j}>
              {headerGroup.headers.map((column, i) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={i}
                >
                  {column.render("Header")}
                  {i > 1 && i < headerGroup.headers.length - 1 && (
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <SortDown />
                        ) : (
                          <SortUp />
                        )
                      ) : (
                        <SortIcon />
                      )}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <React.Fragment {...row.getRowProps()} key={i}>
                <tr>
                  {row.cells.map((cell, k) => {
                    return (
                      <td {...cell.getCellProps()} key={k}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
        {/* {console.log(
          JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              "selectedFlatRows[].original": selectedFlatRows.map(
                (d) => d.original
              ),
            },
            null,
            2
          ),
          "Selected Rows"
        )} */}
      </table>
    </>
  );
}

export default function InventoryTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Product",
        accessor: "product",
        Cell: ({ value }) => <ProductCell value={value} />,
      },
      {
        Header: "Rating",
        accessor: "rating",
        Cell: ({ value }) => <RatingsCell value={value} />,
      },
      {
        Header: "Vintage",
        accessor: "vintage",
      },
      {
        Header: "Qty",
        accessor: "quantity",
      },
      {
        Header: "Volume",
        accessor: "volume",
      },
      {
        Header: "Cost",
        accessor: "cost",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? <Exapnded /> : <Exapnd />}
          </span>
        ),
      },
    ],
    []
  );

  const renderRowSubComponent = React.useCallback(
    ({ row }) => <ExpandedRow values={row.values}></ExpandedRow>,
    []
  );
  return (
    <section className="inventory_section">
      <div className="title">Inventory</div>
      <Table
        columns={columns}
        data={tableJson}
        renderRowSubComponent={renderRowSubComponent}
      />
    </section>
  );
}
