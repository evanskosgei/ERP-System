import React from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';

 const Grids = () => {
  return (
    <div>
			<PageHeader currentpage="Grids" activepage="Elements" mainpage="Grids" />

                <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-12 gap-6">
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <div className= "box-title">Column In Grid</div>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">01</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">02</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">03</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">04</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">05</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">06</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">07</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">08</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">09</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <div className= "box-title">Spanning Columns</div>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold">
                                        <div className= "p-4 rounded-sm bg-primary">01</div>
                                        <div className= "p-4 rounded-sm bg-primary">02</div>
                                        <div className= "p-4 rounded-sm bg-primary">03</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary col-span-2">04</div>
                                        <div className= "p-4 rounded-sm bg-primary">05</div>
                                        <div className= "p-4 rounded-sm bg-primary">06</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary col-span-2">07</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-12 gap-6">
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <div className= "box-title">Starting And Ending Lines</div>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold">
                                        <div className= "p-4 rounded-sm"></div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary col-start-2 col-span-4">01</div>
                                        <div className= "p-4 rounded-sm"></div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary col-start-1 col-end-3">02</div>
                                        <div className= "p-4 rounded-sm"></div>
                                        <div className= "p-4 rounded-sm"></div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary col-end-7 col-span-2">03</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary col-start-1 col-end-7">04</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <div className= "box-title">Spanning Rows</div>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary sm:grid space-y-6 sm:space-y-0 place-content-center row-span-3">01</div>
                                        <div className= "p-4 rounded-sm bg-primary sm:grid space-y-6 sm:space-y-0 place-content-center col-span-2">02</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary sm:grid space-y-6 sm:space-y-0 place-content-center row-span-2 col-span-2">03</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-12 gap-6">
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <div className= "box-title">Specifying Rows in A Grid</div>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-rows-4 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">01</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">02</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">03</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">04</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">05</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">06</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">07</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">08</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">09</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Starting And Ending Lines</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 sm:p-12 rounded-sm shadow-lg bg-primary sm:grid space-y-6 sm:space-y-0 place-content-center row-start-2 row-span-2">01</div>
                                        <div className= "p-4 sm:p-12 rounded-sm shadow-lg bg-primary sm:grid space-y-6 sm:space-y-0 place-content-center row-end-3 row-span-2">02</div>
                                        <div className= "p-4 sm:p-12 rounded-sm shadow-lg bg-primary sm:grid space-y-6 sm:space-y-0 place-content-center row-start-1 row-end-4">03</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-12 gap-6">
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Gap Between Elements</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">01</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">02</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">03</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">04</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Changing Rows And Columns Independently</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-3 gap-x-8 gap-y-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">01</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">02</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">03</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">04</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">05</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">06</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-12 gap-6">
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">sm:grid space-y-6 sm:space-y-0 Element Placement</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-3 grid-rows-3 grid-flow-row-dense gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "p-4 col-span-2 rounded-sm bg-primary">01</div>
                                        <div className= "p-4 col-span-2 rounded-sm bg-primary">02</div>
                                        <div className= "p-4 rounded-sm shadow-lg bg-primary">03</div>
                                        <div className= "p-4 rounded-sm bg-primary">04</div>
                                        <div className= "p-4 rounded-sm bg-primary">05</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className= "col-span-12 lg:col-span-6">
                        <div className= "box">
                            <div className= "box-header">
                                <h5 className= "box-title">Equal Widths</h5>
                            </div>
                            <div className= "box-body">
                                <div className= "relative">
                                    <div className= "relative rounded-sm overflow-auto">
                                      <div className= "sm:grid space-y-6 sm:space-y-0 grid-cols-12 gap-4 font-mono text-white text-sm text-center font-bold rounded-sm">
                                        <div className= "col-span-12 sm:col-span-4 p-4 rounded-sm shadow-lg bg-primary">Column</div>
                                        <div className= "col-span-12 sm:col-span-4 p-4 rounded-sm shadow-lg bg-primary">Column</div>
                                        <div className= "col-span-12 sm:col-span-4 p-4 rounded-sm shadow-lg bg-primary">Column</div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
export default Grids;