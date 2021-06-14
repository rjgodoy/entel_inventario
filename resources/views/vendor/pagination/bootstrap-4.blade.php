@if ($paginator->hasPages())
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <a class="pagination-previous has-text-white is-size-7" disabled>Previous</a>
        @else
            <a class="pagination-previous has-text-white is-size-7" href="{{ $paginator->previousPageUrl() }}">Previous</a>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a class="pagination-next has-text-white is-size-7" href="{{ $paginator->nextPageUrl() }}">Next Page</a>
        @else
            <a class="pagination-next has-text-white is-size-7" disabled>Next Page</a>
        @endif
        

        {{-- Pagination Elements --}}
        <ul class="pagination-list">
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li><span class="pagination-ellipsis is-size-7">&hellip;</span></li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                        @foreach ($element as $page => $url)
                            @if ($page == $paginator->currentPage())
                                <li><a class="pagination-link is-current has-text-white is-size-7" aria-label="Goto page {{ $page }}">{{ $page }}</a></li>
                            @else
                                <li><a href="{{ $url }}" class="pagination-link has-text-white is-size-7" aria-label="Goto page {{ $page }}">{{ $page }}</a></li>
                            @endif
                        @endforeach
                @endif
            @endforeach
        </ul>

    </nav>
@endif